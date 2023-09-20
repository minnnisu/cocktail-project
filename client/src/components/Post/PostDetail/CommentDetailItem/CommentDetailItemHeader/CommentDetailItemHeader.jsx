import styles from "./CommentDetailItemHeader.module.css";
function CommentDetailItemHeader({ nickname, created_at }) {
  const date = new Date(created_at);
  return (
    <div className={styles.header}>
      <div className={styles.nickname}>{nickname}</div>
      <div className={styles.created_at}>{`${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</div>
    </div>
  );
}

export default CommentDetailItemHeader;
