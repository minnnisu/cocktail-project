import styles from "./PostItemContent.module.css";

function PostItemContent({ content, truncateText }) {
  return <div className={styles.content}>{truncateText(content, 100)}</div>;
}

export default PostItemContent;
