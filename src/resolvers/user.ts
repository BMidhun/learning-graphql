import { getPostsFromUser } from "./queries/user";

const User = {
    posts: getPostsFromUser
}

export default User;