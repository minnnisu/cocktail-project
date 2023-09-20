import Title from "../../../UI/Title/Title";
import styles from "./PostItemHeader.module.css";

function PostItemHeader({ title, nickname, created_at, truncateText }) {
  const date = new Date(created_at);

  return (
    <div className={styles.header}>
      <Title size={5}>{truncateText(title, 20)}</Title>
      <div className={styles.header_right}>
        <div className={styles.nickname}>{nickname}</div>
        <div className={styles.created_at}>{`${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()}`}</div>
      </div>
    </div>
  );
}

export default PostItemHeader;
