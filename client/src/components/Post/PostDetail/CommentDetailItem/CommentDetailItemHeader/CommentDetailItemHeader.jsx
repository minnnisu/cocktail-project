import styles from "./CommentDetailItemHeader.module.css";
function CommentDetailItemHeader({ nickname, created_at, HandleMoreTaskShow }) {
  const date = new Date(created_at);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.nickname}>{nickname}</div>
        <div className={styles.created_at}>{`${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <span
            onClick={HandleMoreTaskShow}
            className="material-symbols-outlined"
          >
            more_horiz
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentDetailItemHeader;
