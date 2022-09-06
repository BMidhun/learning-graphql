import formatDate from "../../../utils/formatDate";
import styles from "../style.module.css";

interface IProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
}

function Post({ id, title, content, createdAt, username }: IProps) {
  return (
    <div className={styles["post-card"]} key={id}>
      <div className={styles["post-header"]}>
        <p>{username}</p>
        <p>{formatDate(createdAt)}</p>
      </div>
      <div className={styles["post-body"]}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Post;
