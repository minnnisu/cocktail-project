import RadioButton from "../RadioButton";
import style from "./RadioButtons.module.css";

function RadioButtons({ radioButtonNames, selectedValue, setSelectedValue }) {
  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className={style.radio_buttons_container}>
      {radioButtonNames.map((radioButtonName, index) => (
        <RadioButton
          key={index}
          selectedValue={selectedValue}
          onClickButton={handleValueChange}
        >
          {radioButtonName}
        </RadioButton>
      ))}
    </div>
  );
}

export default RadioButtons;
