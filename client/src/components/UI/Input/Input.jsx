import style from "./Input.module.css";

function Input({ value, onChangeValue, children }) {
  const handleValueChange = (e) => {
    onChangeValue({ [children]: e.target.value });
  };

  return (
    <div className={style.input_container}>
      <div className={style.input_name}>{children}</div>
      <input
        className={style.input_value}
        value={value === undefined ? "" : value}
        onChange={handleValueChange}
      />
    </div>
  );
}

export default Input;
