import { User } from "@prisma/client";
import { IContext } from "../../interface";

async function me(parent:any, args:any , context:IContext): Promise<User | null> {
    const {dbClient, userInfo} = context;

    if(!userInfo)
        return null

    return await dbClient.user.findUnique({where:{id:userInfo.userId}})


}


export {me};