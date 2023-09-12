import RadioButton from "../RadioButton";
import styles from "./RadioButtons.module.css";

function RadioButtons({ radioButtonNames, selectedValue, setSelectedValue }) {
  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className={styles.radio_buttons_container}>
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
