import { Profile, User } from "@prisma/client";
import dbClient from "../../db.config";
import { IContext } from "../../interface";

async function me(parent:any, args:any , context:IContext): Promise<User | null> {
    const {dbClient, userInfo} = context;

    if(!userInfo)
        return null

    return await dbClient.user.findUnique({where:{id:userInfo.userId}})


}

async function profile(parent:any, args:{userId: string}, context:IContext): Promise<Profile | null> {

    const {dbClient} = context;
    const {userId} = args;

    return await dbClient.profile.findUnique({where:{userId:Number(userId)}})
    
}


interface IUserParent {
    id:number
    bio:string
    userId:number
}


async function getUserFromProfile(parent:IUserParent, args:any, context:IContext): Promise<User | null> {
    const {userId} = parent;

    console.log(typeof userId);

    return await dbClient.user.findUnique({where:{id:userId}})

}


export {me, profile, getUserFromProfile};