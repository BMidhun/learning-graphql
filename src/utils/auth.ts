import jwt from "jsonwebtoken";
import { IUserInfo } from "../interface";
import { SERVER_KEY } from "../key";

function getUserData (token:string): IUserInfo | null {

    try {

        if(!token)
            return null


     const userInfo = (jwt.verify(token,SERVER_KEY)) as IUserInfo;

     return userInfo;
        
    } catch (error) {
        return null
    }

}

export {getUserData};