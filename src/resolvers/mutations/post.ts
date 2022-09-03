import { IContext, ICreateUpdatePostArgs, IPostPayloadResponse, postUpdateArgs } from "../../interface";
import canUserMutate from "../../utils/can-user-mutate";

async function postCreate(parent:any, args:ICreateUpdatePostArgs, context:IContext):Promise<IPostPayloadResponse> {

    try {
        const {dbClient, userInfo} = context;
        const {input:{title,content}} = args;


        if(!userInfo) {
            const message = "Unauthorized";
            return {errors:[{message}], post:null}
        }

        if(!title || !content){
            const message = "Please provide both title and content to create a post."
             return {errors:[{message}], post:null}
        }

        const post = await dbClient.post.create({
            data:{
                title,
                content,
                authorId:userInfo.userId
            }
        });

        return {errors:[], post}
        
    } catch (error) {
        console.log(error);
        return {errors:[{message:"Server issue"}], post:null}
    }
   
}



async function postUpdate(parent:any,args: postUpdateArgs ,context:IContext):Promise<IPostPayloadResponse> {
    const {dbClient,userInfo} = context
    const {postId, input:{title, content}} = args;

    
    if(!userInfo) {
        const message = "Unauthorized";
        return {errors:[{message}], post:null}
    }

    const error = await canUserMutate(Number(postId), userInfo.userId, dbClient);

    if(error)
        return error;


    if(!title && !content) {
        return {errors:[{message:"Please provide either title or content"}], post:null}
    }

    const existingPost = await dbClient.post.findUnique({where:{id: Number(postId)}});

    if(!existingPost){
        return {errors:[{message:"Post doesn't exist"}], post:null}
    }

    const payload = {title:title ? title : existingPost.title, content: content ? content : existingPost.content}
 
    const post = await dbClient.post.update({data:{...payload}, where:{id:Number(postId)}})

    return {errors:[], post}

}

async function postDelete(parent:any, args:{postId:string}, context:IContext):Promise<IPostPayloadResponse> {
    const {dbClient, userInfo} = context
    const {postId} = args;

    
    if(!userInfo) {
        const message = "Unauthorized";
        return {errors:[{message}], post:null}
    }

    
    const error = await canUserMutate(Number(postId), userInfo.userId, dbClient);

    if(error)
        return error;

    const postExists = await dbClient.post.findUnique({where:{id:Number(postId)}})

    if(!postExists)
        return {errors:[{message:"Post doesn't exist"}], post:null }

    const post = await dbClient.post.delete({where:{id:Number(postId)}});

    return {errors:[], post}

}


export {postCreate, postUpdate, postDelete}