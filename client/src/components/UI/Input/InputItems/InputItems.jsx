import style from "./InputItems.module.css";
import Input from "../Input";

function InputItems({ inputNames, inputValues, setInputValues }) {
  const handleInputItemsChange = (value) => {
    setInputValues((prev) => ({ ...prev, ...value }));
  };

  return (
    <div className={style.input_items_container}>
      {inputNames.map((names, index) => (
        <Input
          key={index}
          value={inputValues[names]}
          onChangeValue={handleInputItemsChange}
        >
          {names}
        </Input>
      ))}
    </div>
  );
}

export default InputItems;
