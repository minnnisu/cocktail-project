import MultipleSelectChip from "../MultipleSelectChip";
import styles from "./MultipleSelectChips.module.css";

function MultipleSelectChips({ selectChips, setSelectChips }) {
  const handleRemoveButtonClick = (targetIndex) => {
    setSelectChips((prev) => prev.filter((_, index) => index !== targetIndex));
  };

  return (
    <div className={styles.multiple_select_chips_container}>
      {selectChips.map((selectChip, index) => (
        <div key={index} className="d-flex">
          <MultipleSelectChip
            onClickRemoveButton={() => handleRemoveButtonClick(index)}
          >
            {selectChip}
          </MultipleSelectChip>
        </div>
      ))}
    </div>
  );
}

export default MultipleSelectChips;
