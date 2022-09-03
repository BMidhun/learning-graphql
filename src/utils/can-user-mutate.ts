import { IContext, IPostPayloadResponse } from "../interface";

async function canUserMutate (
    postId:number,
    userId:number,
    dbClient: IContext["dbClient"]
): Promise<IPostPayloadResponse | null> {

    const user = await dbClient.user.findUnique({where:{id:userId}})

    if(!user)
        return {errors:[{message:"User doesn't exist"}], post:null};

    let post = await dbClient.post.findUnique({where:{id:postId}});

    if(!post)
        return {errors:[{message:"Post doesn't exist"}], post:null};

    
    if(post.authorId !== userId)
        return {errors:[{message:"User not allowed to perform the operation."}], post:null};

    return null

}

export default canUserMutate;