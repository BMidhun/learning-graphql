import { IContext, ICreatePostArgs } from "../interface";

const Mutation = {
    postCreate : async (parent:any, args:ICreatePostArgs, context:IContext) => {
        const {dbClient} = context;
        const {content,title} = args 
        
        await dbClient.post.create({
            data:{
                content,
                title,
                authorId:1,
                published:false
            }
        });


        return {};
        
    }
}


export default Mutation;