import style from "./NameInput.module.css";
import InputName from "../../Atoms/Input/InputName/InputName";
import Input from "../../Atoms/Input/Input/Input";

function NameInput({ name, onChangeInputValue }) {
  const handleValueChange = (value) => {
    onChangeInputValue({ [name]: value });
  };

  return (
    <div className={style.input_container}>
      <InputName name={name} />
      <Input onChangeValue={handleValueChange} />
    </div>
  );
}

export default NameInput;
