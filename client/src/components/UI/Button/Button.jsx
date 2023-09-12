import styles from "./Button.module.css";

function Button({
  onClickButton,
  children,
  backgroundColor = "blue",
  buttonWidth,
}) {
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

  const buttonClass = [styles.button_container];

  if (buttonWidth === "large") {
    buttonClass.push(styles.large);
  }

  return (
    <div
      style={{ backgroundColor: `${getBackgroundColorCode()}` }}
      className={buttonClass.join(" ")}
      onClick={onClickButton}
    >
      <div className={styles.value}>{children}</div>
    </div>
  );
}

export default Button;
