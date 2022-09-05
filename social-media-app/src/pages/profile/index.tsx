import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "../../components/Modal/modal";
import CreatePostForm from "./components/create-post-form";
import PostCard from "./components/post-card";
import ProfileHeader from "./components/profile-header";
import styles from "./style.module.css";

interface IProfileData {
  id: number;
  bio: string;
  isMyProfile:boolean
  user: {
    name: string;
  };
  posts: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }[];
}

interface IProfile {
  profile: IProfileData;
}

interface QueryVars {
  userId: string | undefined;
  skip: number;
  take: number;
}

const GET_USER_PROFILE = gql`
  query ($userId: ID!, $skip: Int!, $take: Int!) {
    profile(userId: $userId) {
      id
      bio
      isMyProfile
      user {
        name
      }
      posts(skip: $skip, take: $take) {
        id
        title
        content
        createdAt
      }
    }
  }
`;

const TAKE = 10;

function Profile() {
  const { id } = useParams();
  const [skip, setSkip] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { loading, error, data } = useQuery<IProfile, QueryVars>(
    GET_USER_PROFILE,
    { variables: { skip, take: TAKE, userId: id } }
  );

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
      <ProfileHeader
        username={data.profile.user.name}
        bio={data.profile.bio}
        openModal={openModal}
        isMyProfile={data.profile.isMyProfile}
      />

      <div className={styles["posts-wrapper"]}>
        {data.profile.posts ? (
          data.profile.posts?.map((_post) => {
            return (
              <PostCard
                content={_post.content}
                key={_post.id}
                id={_post.id}
                title={_post.title}
                username={data.profile.user.name}
                createdAt={_post.createdAt}
                isMyProfile={data.profile.isMyProfile}
              />
            );
          })
        ) : (
          <div>No posts available</div>
        )}
      </div>

      <Modal showModal={showModal} title={"Add Post"} onClose={closeModal}>
        <CreatePostForm />
      </Modal>
    </div>
  );
}

export default Profile;
