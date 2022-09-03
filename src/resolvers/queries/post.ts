import { IContext } from "../../interface";

async function getAllPosts (parent:any, args:any, context:IContext) {
    const {dbClient} = context
    const posts = await dbClient.post.findMany({
        orderBy:[{createdAt:"desc"}]
    }) 

    return posts;

}

export {getAllPosts}