import { postCreate, postDelete, postUpdate } from "./mutations/post";
import { signUp } from "./mutations/user";

const Mutation = {
    postCreate,
    postUpdate,
    postDelete,
    signUp
}


export default Mutation;