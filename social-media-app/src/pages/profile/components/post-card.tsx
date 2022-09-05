import { gql, useMutation } from "@apollo/client";
import Button from "../../../components/Button/button";
import formatDate from "../../../utils/formatDate";
import styles from "../style.module.css";

interface IProps {
  username:string
  createdAt:string
  title:string
  content:string
  id:number
  isMyProfile:boolean
  published:boolean
  loadProfile:() => void
}

function PostCard({username, createdAt, title, content, id, isMyProfile, published, loadProfile}:IProps) {

  const PUBLISH_POST = gql`
    mutation postPublish($postId:ID!){
      postPublish(postId: $postId) {
         errors{
          message
         }
         post{
           id
         }
      }
    }
    `

    const UNPUBLISH_POST = gql`
    mutation postUnPublish($postId:ID!){
      postUnPublish(postId: $postId) {
         errors{
          message
         }
         post{
           id
         }
      }
    }
    `

    const [publishPost, {data,loading,error}] = useMutation(PUBLISH_POST, {variables:{postId:id}})
    const [UnpublishPost, {data:unpublishedData, loading:unpublishedLoading, error:unPublishedError}] = useMutation(UNPUBLISH_POST,{variables:{postId:id}})
  
    const  onPublish = () => {publishPost({onCompleted:() => {loadProfile()}}); }
    const  onUnPublish = () => {UnpublishPost({onCompleted:() => {loadProfile()}}); }

  return (
    <div className={published ? styles[`post-card`] : styles[`post-card-unpublished`]}>
    {(loading || unpublishedLoading) ? <div>Loading...</div> : <><div className={styles["post-header"]}>
      <p>{username}</p>
      <p>{formatDate(createdAt)}</p>
    </div>

    <div className={styles["post-body"]}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>

    <div className={styles["post-footer"]}>
    {isMyProfile && (!published ? <Button onClick={onPublish}>Publish Post</Button> : <Button onClick={onUnPublish}>Unpublish Post</Button> ) }
    </div></> }
  </div>
  )
}

export default PostCard
