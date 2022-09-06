import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "../../components/Modal/modal";
import CreatePostForm from "./components/create-post-form";
import PostCard from "./components/post-card";
import ProfileHeader from "./components/profile-header";
import { IProfile, QueryVars } from "./interfaces";
import { GET_MY_PROFILE, GET_USER_PROFILE } from "./queries";
import styles from "./style.module.css";


const TAKE = 10;

function Profile({ownProfile}:{ownProfile?:boolean|undefined}) {
  const { id } = useParams();
  const [skip, setSkip] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const QUERY = ownProfile ? GET_MY_PROFILE : GET_USER_PROFILE;
  const userProfileKey = ownProfile ? "me" : "profile";

  const { loading, error, data, refetch } = useQuery<IProfile, QueryVars>(
    QUERY,
    { variables: { skip, take: TAKE, userId: id } }
  );

  function loadProfile () {
    refetch({skip:0,take:TAKE})
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  if (loading) return <div>Loading....</div>;

  if (error) return <div>{JSON.stringify(error)}</div>;

  if (!data) return <div>User not found</div>;

  

  return (
    <div className={styles["profile"]}>
      {data[userProfileKey] ? <><ProfileHeader
        username={data[userProfileKey].user.name}
        bio={data[userProfileKey].bio}
        openModal={openModal}
        isMyProfile={data[userProfileKey].isMyProfile}
      />

      <div className={styles["posts-wrapper"]}>
        {data[userProfileKey].posts ? (
          data[userProfileKey].posts?.map((_post) => {
            return (
              <PostCard
                content={_post.content}
                key={_post.id}
                id={_post.id}
                title={_post.title}
                username={data[userProfileKey].user.name}
                createdAt={_post.createdAt}
                isMyProfile={data[userProfileKey].isMyProfile}
                published={_post.published}
                loadProfile={loadProfile}
              />
            );
          })
        ) : (
          <div>No posts available</div>
        )}
      </div> </>: <div>No User found 404</div> }

      <Modal showModal={showModal} title={"Add Post"} onClose={closeModal}>
        <CreatePostForm loadProfile={loadProfile} closeModal={closeModal}/>
      </Modal>
    </div>
  );
}

export default Profile;
