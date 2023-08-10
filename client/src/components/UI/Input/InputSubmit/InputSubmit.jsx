import style from "./InputSubmit.module.css";
import InputItems from "../InputItems/InputItems";
import Button from "../../Button/Button";
import { useState } from "react";

function InputSubmit({ items, onSubmitInputItems, buttonName }) {
  const [inputSubmitValues, setInputSubmitValues] = useState({});

  const handleButtonClick = () => {
    onSubmitInputItems(inputSubmitValues);
    setInputSubmitValues({});
  };

  return (
    <div className={style.input_submit_container}>
      <InputItems
        inputNames={items}
        inputValues={inputSubmitValues}
        setInputValues={setInputSubmitValues}
      />
      <Button onClickButton={handleButtonClick}>{buttonName}</Button>
    </div>
  );
}

export default InputSubmit;
