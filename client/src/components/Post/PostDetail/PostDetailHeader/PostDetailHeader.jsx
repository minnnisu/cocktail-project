import { useAuthHandler } from "../../../../hooks/useAuthHandler";
import Title from "../../../UI/Title/Title";
import styles from "./PostDetailHeader.module.css";

function PostDetailHeader({ title, author, createdAt, HandleMoreTaskShow }) {
  const { user } = useAuthHandler();
  const date = new Date(createdAt);

  return (
    <div className={styles.header}>
      <Title size={5}>{title}</Title>
      <div className={styles.header_right}>
        <div className={styles.nickname}>{author.nickname}</div>
        <div className={styles.created_at}>{`${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</div>
        {author.id === user && (
          <div className={styles.wrapper}>
            <span
              onClick={() => HandleMoreTaskShow()}
              className="material-symbols-outlined"
            >
              more_horiz
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetailHeader;
