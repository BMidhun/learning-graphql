import { getAllPosts } from "./queries/post";
import { me, profile } from "./queries/user";

const Query = {
    posts: getAllPosts,
    me,
    profile
}

export default Query;