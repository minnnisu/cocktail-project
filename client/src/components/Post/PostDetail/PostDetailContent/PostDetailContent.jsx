import styles from "./PostDetailContent.module.css";

function PostDetailContent({ content }) {
  return (
    <div className={styles.content_container}>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default PostDetailContent;
