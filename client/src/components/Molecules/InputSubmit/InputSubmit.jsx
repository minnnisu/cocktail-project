import style from "./InputSubmit.module.css";
import InputItems from "./InputItems";
import Button from "../../Atoms/Button/Button";
import { useState } from "react";

function InputSubmit({ items, onSubmitInputItems }) {
  const [inputItems, setInputItems] = useState({});

  const handleButtonClick = () => {
    onSubmitInputItems(inputItems);
  };

  return (
    <div className={style.input_submit_container}>
      <InputItems items={items} setInputItems={setInputItems} />
      <Button value={"추가"} onClickButton={handleButtonClick} />
    </div>
  );
}

export default InputSubmit;
