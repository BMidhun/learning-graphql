import { IContext, ICreatePostArgs, ICreatePostResponse } from "../../interface";

async function postCreate(parent:any, args:ICreatePostArgs, context:IContext):Promise<ICreatePostResponse> {

    try {
        const {dbClient} = context;
        const {title,content} = args;

        if(!title || !content){
            const message = "Please provide both title and content to create a post."
             return {errors:[{message}], post:null}
        }

        const post = await dbClient.post.create({
            data:{
                title,
                content,
                authorId:1
            }
        });

        return {errors:[], post}
        
    } catch (error) {
        console.log(error);
        return {errors:[{message:"Server issue"}], post:null}
    }
   
}


export {postCreate}