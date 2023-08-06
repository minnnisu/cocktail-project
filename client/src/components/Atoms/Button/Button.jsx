import style from "./Button.module.css";

function Button({ value, onClickButton }) {
  return (
    <div className={style.button_container}>
      <div className={style.value} onClick={onClickButton}>
        {value}
      </div>
    </div>
  );
}

export default Button;
