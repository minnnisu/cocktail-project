import { useState } from "react";
import NameInput from "../NameInput/NameInput";

function InputItems({ items, setInputItems }) {
  const handleInputItemsChange = (value) => {
    setInputItems((prev) => ({ ...prev, ...value }));
  };

  return (
    <>
      {items.map((item, index) => (
        <NameInput
          key={index}
          name={item}
          onChangeInputValue={handleInputItemsChange}
        />
      ))}
    </>
  );
}

export default InputItems;
