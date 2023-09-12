import styles from "./Textarea.module.css";

function Textarea({ onChangeTextarea }) {
  const handleTextareaChange = (e) => {
    onChangeTextarea(e.target.value);
  };

  return (
    <textarea
      className={styles.textarea}
      onChange={handleTextareaChange}
    ></textarea>
  );
}

export default Textarea;
