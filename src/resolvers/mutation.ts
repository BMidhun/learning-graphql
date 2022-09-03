import { postCreate, postDelete, postUpdate } from "./mutations/post";
import { signIn, signUp } from "./mutations/user";

const Mutation = {
    postCreate,
    postUpdate,
    postDelete,
    signUp,
    signIn
}


export default Mutation;