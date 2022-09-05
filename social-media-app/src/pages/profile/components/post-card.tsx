import Button from "../../../components/Button/button";
import formatDate from "../../../utils/formatDate";
import styles from "../style.module.css";

interface IProps {
  username:string
  createdAt:string
  title:string
  content:string
  id:number
}

function PostCard({username, createdAt, title, content, id}:IProps) {
  return (
    <div className={styles["post-card"]}>
    <div className={styles["post-header"]}>
      <p>{username}</p>
      <p>{formatDate(createdAt)}</p>
    </div>

    <div className={styles["post-body"]}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>

    <div className={styles["post-footer"]}>
    <Button onClick={() => null}>Publish Post</Button>
    </div>
  </div>
  )
}

export default PostCard
