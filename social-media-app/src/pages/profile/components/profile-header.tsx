import Button from "../../../components/Button/button";
import styles from "../style.module.css";

interface IProps {
  username:string
  bio:string
  openModal:() => void
}

function ProfileHeader({username,bio, openModal}:IProps) {
  return (
    <div className={styles["profile-header"]}>
        <div>
          <h2>{username}</h2>
          <p>{bio}</p>
        </div>
        <Button onClick={openModal}>Add Post</Button>
      </div>
  )
}

export default ProfileHeader
