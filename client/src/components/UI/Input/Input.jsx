import style from "./Input.module.css";

function Input({ title, name, value, onChangeValue }) {
  return (
    <div className={style.input_container}>
      <div className={style.input_name}>{title}</div>
      <input
        name={name}
        className={style.input_value}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
}

export default Input;
