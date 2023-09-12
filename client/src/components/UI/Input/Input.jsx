import styles from "./Input.module.css";

function Input({ title, name, type, value, onChangeValue, inputWidth }) {
  const inputContainerClass = [styles.input_container];
  const inputClass = [styles.input_value];
  if (inputWidth === "large") {
    inputContainerClass.push(styles.large);
    inputClass.push(styles.large);
  }

  return (
    <div className={inputContainerClass.join(" ")}>
      <div className={styles.input_name}>{title}</div>
      <input
        className={inputClass.join(" ")}
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
}

export default Input;
