import { Post, User } from "@prisma/client";
import { userLoader } from "../../app-data-loaders/user-loader";
import { IContext } from "../../interface";

async function getAllPosts (parent:any, args:{take:number, skip:number}, context:IContext):Promise<Post[]> {
    const {dbClient} = context
    const {take,skip} = args;

    const posts = await dbClient.post.findMany({
        orderBy:[{createdAt:"desc"}], where:{published:true}, skip, take
    }) 

    return posts;

}

interface IParentGetAuthorPost {
    authorId:number
}

async function getAuthorByPost(parent:IParentGetAuthorPost, args:any, context:IContext): Promise<User | null> {
    const {authorId} = parent;
    // const {dbClient} = context;

    // const user = await dbClient.user.findUnique({where:{id:authorId}})

    const user = userLoader.load(authorId);

    return user; 

}

export {getAllPosts, getAuthorByPost}