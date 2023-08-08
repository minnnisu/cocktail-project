import style from "./Button.module.css";

function Button({ onClickButton, children, backgroundColor = "blue" }) {
  const getBackgroundColorCode = () => {
    switch (backgroundColor) {
      case "blue":
        return "#4083e0";
      case "red":
        return "#ce3f3f";
      default:
        return "#4083e0";
    }
  };

  return (
    <div
      style={{ backgroundColor: `${getBackgroundColorCode()}` }}
      className={style.button_container}
      onClick={onClickButton}
    >
      <div className={style.value}>{children}</div>
    </div>
  );
}

export default Button;
