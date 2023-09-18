import styles from "./Textarea.module.css";

function Textarea({ name, onChangeTextarea }) {
  const handleTextareaChange = (e) => {
    onChangeTextarea(e.target.value);
  };

  return (
    <textarea
      name={name}
      className={styles.textarea}
      onChange={handleTextareaChange}
    ></textarea>
  );
}

export default Textarea;
