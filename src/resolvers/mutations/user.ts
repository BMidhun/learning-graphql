import {IContext, ICredential, ISignUpArgs, ISignUpSignInPayloadResponse} from "../../interface/"
import Validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SERVER_KEY } from "../../key";

async function signUp(parent:any, args:ISignUpArgs, context:IContext):Promise<ISignUpSignInPayloadResponse> {
    const { dbClient } = context;
    const {credentials,bio,name} = args;
    const {email,password} = credentials

    if(!Validator.isEmail(email)) {
        return {errors:[{message:"Invalid email address."}], token: null}
    }

    if(!Validator.isLength(password,{min:5})) {
        return {errors:[{message:"Password not strong. Please provide a password containing atleast 5 characters."}], token: null}
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await dbClient.user.create({data:{email,password:hashedPassword, name}});
    const token = jwt.sign({userId: user.id}, SERVER_KEY, {expiresIn:"1h"})

    await dbClient.profile.create({data:{bio, userId:user.id}});

    return {errors:[], token}
}

async function signIn(parent:any, args:{credentials:ICredential}, context:IContext):Promise<ISignUpSignInPayloadResponse> {
    const {dbClient} = context;
    const {credentials} = args;
    const {email, password} = credentials;

    if(!email || !password) {
        return {errors:[{message:"Provide an email or password to login"}], token:null}
    }

    const user = await dbClient.user.findUnique({where:{email}});

    if(!user)
        return {errors:[{message:"Invalid email address"}], token:null}

    const hasMatch = await bcrypt.compare(password,user.password);

    if(!hasMatch)
        return {errors:[{message:"Invalid password"}], token:null}

    const token = jwt.sign({userId:user.id}, SERVER_KEY,{expiresIn: 3600});

    return {errors:[], token}
    
}


export {signUp, signIn}