import { Post, User } from "@prisma/client";
import { IContext } from "../../interface";

async function getAllPosts (parent:any, args:any, context:IContext):Promise<Post[]> {
    const {dbClient} = context
    const posts = await dbClient.post.findMany({
        orderBy:[{createdAt:"desc"}], where:{published:true}
    }) 

    return posts;

}

interface IParentGetAuthorPost {
    authorId:number
}

async function getAuthorByPost(parent:IParentGetAuthorPost, args:any, context:IContext): Promise<User | null> {
    const {dbClient} = context;
    const {authorId} = parent;
    
    const user = await dbClient.user.findUnique({where:{id:authorId}})

    return user;

    
}

export {getAllPosts, getAuthorByPost}