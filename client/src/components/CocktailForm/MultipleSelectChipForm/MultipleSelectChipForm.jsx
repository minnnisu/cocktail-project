import { useState } from "react";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import style from "./MultipleSelectChipForm.module.css";

function MultipleSelectChipForm({ title, selectChips, setSelectChips }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueSubmit = () => {
    setSelectChips((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {selectChips.length > 0 && (
        <MultipleSelectChips
          selectChips={selectChips}
          setSelectChips={setSelectChips}
        />
      )}
      <Input
        title={title.ko}
        name={title.en}
        value={inputValue}
        onChangeValue={handleInputValueChange}
      />
      <div className={style.button_container}>
        <Button onClickButton={handleInputValueSubmit}>{"추가"}</Button>
      </div>
    </>
  );
}

export default MultipleSelectChipForm;
