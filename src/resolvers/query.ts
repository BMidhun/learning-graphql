import { getAllPosts } from "./queries/post";
import { me } from "./queries/user";

const Query = {
    posts: getAllPosts,
    me
}

export default Query;