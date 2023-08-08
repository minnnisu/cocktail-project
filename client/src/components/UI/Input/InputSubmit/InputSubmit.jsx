import style from "./InputSubmit.module.css";
import InputItems from "../InputItems/InputItems";
import Button from "../../Button/Button";
import Margin16 from "../../Wrapper/Margin/Margin16/Margin16";
import { useState } from "react";

function InputSubmit({ items, onSubmitInputItems }) {
  const [inputSubmitValues, setInputSubmitValues] = useState({});

  const handleButtonClick = () => {
    onSubmitInputItems(inputSubmitValues);
    setInputSubmitValues({});
  };

  return (
    <div className={style.input_submit_container}>
      <Margin16 positions={["Right"]}>
        <InputItems
          inputNames={items}
          inputValues={inputSubmitValues}
          setInputValues={setInputSubmitValues}
        />
      </Margin16>
      <Button onClickButton={handleButtonClick}>{"추가"}</Button>
    </div>
  );
}

export default InputSubmit;
