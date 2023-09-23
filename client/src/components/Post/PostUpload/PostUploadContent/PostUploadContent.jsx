import styles from "./PostUploadContent.module.css";
function PostUploadContent({ value, onChange }) {
  return (
    <textarea
      className={styles.content}
      placeholder="본문을 입력하세요."
      name="content"
      value={value}
      onChange={onChange}
    />
  );
}

export default PostUploadContent;
