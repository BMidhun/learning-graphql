import { getPostsFromProfile, getUserFromProfile } from "./queries/user";

const Profile = {
    user : getUserFromProfile,
    posts: getPostsFromProfile
} 


export default Profile