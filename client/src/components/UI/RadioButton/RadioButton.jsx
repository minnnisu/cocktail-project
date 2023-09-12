import { useState } from "react";
import styles from "./RadioButton.module.css";

function RadioButton({ selectedValue, onClickButton, children }) {
  const isSelected = children === selectedValue;

  const handleButtonClick = (e) => {
    onClickButton(children);
  };

  return (
    <div className={styles.radio_button_container}>
      <div className={styles.outer_circle} onClick={handleButtonClick}>
        {isSelected && <div className={styles.button_on}></div>}
        {!isSelected && <div className={styles.button_off}></div>}
      </div>
      <div className="value">{children}</div>
    </div>
  );
}

export default RadioButton;
