import { useState } from "react";
import style from "./RadioButton.module.css";

function RadioButton({ selectedValue, onClickButton, children }) {
  const isSelected = children === selectedValue;

  const handleButtonClick = (e) => {
    onClickButton(children);
  };

  return (
    <div className={style.radio_button_container}>
      <div className={style.outer_circle} onClick={handleButtonClick}>
        {isSelected && <div className={style.button_on}></div>}
        {!isSelected && <div className={style.button_off}></div>}
      </div>
      <div className="value">{children}</div>
    </div>
  );
}

export default RadioButton;
