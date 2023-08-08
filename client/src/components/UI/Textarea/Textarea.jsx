import style from "./Textarea.module.css";

function Textarea({ onChangeTextarea }) {
  const handleTextareaChange = (e) => {
    onChangeTextarea(e.target.value);
  };

  return (
    <textarea
      className={style.textarea}
      onChange={handleTextareaChange}
    ></textarea>
  );
}

export default Textarea;
