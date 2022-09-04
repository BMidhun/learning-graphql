import { User } from "@prisma/client";
import DataLoader from "dataloader";
import dbClient from "../db.config";

async function batchUser (ids:number[]): Promise<User[]> {

    console.log(ids)

    // Note: The ids(userids in this case) we receive may not follow the same order when getting the users array from query.
    // That is ids = [1,2,5,3,6] user=[{id:2}, {id:3}, {id:1}, {id:5}]. We need to create userMap to map each id to user object and keep the same order.
    // The end result should be [{id:1}, {id:2}, {id:5}, {id:3}, {id:6}].

    const users = await dbClient.user.findMany({where:{id:{in:ids}}});

    const userMap:{[key:string]: User} = {};

    users.forEach(user => {
        userMap[user.id] = user;
    });

    return ids.map(id => userMap[id]);

}

//@ts-ignore
const userLoader = new DataLoader<number,User>(batchUser)

export {userLoader}