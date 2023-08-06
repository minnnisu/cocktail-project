import style from "./Input.module.css";

function Input({ onChangeValue }) {
  const handleValueChange = (e) => {
    onChangeValue(e.target.value);
  };

  return (
    <input className={style.input_value} onChange={handleValueChange}></input>
  );
}

export default Input;
