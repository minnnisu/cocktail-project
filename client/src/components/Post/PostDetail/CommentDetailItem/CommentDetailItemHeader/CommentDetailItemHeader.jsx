import { useContext } from "react";
import styles from "./CommentDetailItemHeader.module.css";
import { AuthContext } from "../../../../../contexts/AuthContext";
function CommentDetailItemHeader({ comment, HandleMoreTaskShow }) {
  const { user } = useContext(AuthContext);
  const date = new Date(comment.created_at);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.nickname}>{comment.author.nickname}</div>
        <div className={styles.created_at}>{`${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</div>
      </div>
      <div className={styles.right}>
        {user === comment.author.id && (
          <div className={styles.wrapper}>
            <span
              onClick={() => HandleMoreTaskShow(comment)}
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

export default CommentDetailItemHeader;
