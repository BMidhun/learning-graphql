import { postCreate, postDelete, postPublish, postUnPublish, postUpdate } from "./mutations/post";
import { signIn, signUp } from "./mutations/user";

const Mutation = {
    postCreate,
    postUpdate,
    postDelete,
    postPublish,
    postUnPublish,
    
    signUp,
    signIn
}


export default Mutation;