import styles from "./PostUploadContent.module.css";
function PostUploadContent({ value, onChange }) {
  return (
    <textarea
      className={styles.content}
      name="content"
      value={value}
      onChange={onChange}
    />
  );
}

export default PostUploadContent;
