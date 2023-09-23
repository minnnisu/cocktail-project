import styles from "./PostUploadTitle.module.css";

function PostUploadTitle({ value, onChange }) {
  return (
    <input
      placeholder="댓글 작성"
      name="title"
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
}

export default PostUploadTitle;
