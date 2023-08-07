import style from "./Button.module.css";

function Button({ value, onClickButton }) {
  return (
    <div className={style.button_container} onClick={onClickButton}>
      <div className={style.value}>{value}</div>
    </div>
  );
}

export default Button;
