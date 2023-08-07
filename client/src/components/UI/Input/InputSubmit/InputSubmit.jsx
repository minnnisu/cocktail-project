import style from "./InputSubmit.module.css";
import InputItems from "../InputItems/InputItems";
import Button from "../../Button/Button";
import { useState } from "react";

function InputSubmit({ items, onSubmitInputItems }) {
  const [inputItemsResult, setInputItemsResult] = useState({});

  const handleButtonClick = () => {
    onSubmitInputItems(inputItemsResult);
    setInputItemsResult({}); //
  };

  return (
    <div className={style.input_submit_container}>
      <InputItems
        items={items}
        inputItemsResult={inputItemsResult}
        setInputItemsResult={setInputItemsResult}
      />
      <Button value={"추가"} onClickButton={handleButtonClick} />
    </div>
  );
}

export default InputSubmit;
