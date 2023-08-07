import style from "./InputItems.module.css";
import Input from "../Input/Input";
import { useState } from "react";

function InputItems({ items, inputItemsResult, setInputItemsResult }) {
  const handleInputItemsChange = (value) => {
    setInputItemsResult((prev) => ({ ...prev, ...value }));
  };

  return (
    <div className={style.input_items_container}>
      {items.map((item, index) => (
        <Input
          key={index}
          value={inputItemsResult[item]}
          onChangeValue={handleInputItemsChange}
        >
          {item}
        </Input>
      ))}
    </div>
  );
}

export default InputItems;
