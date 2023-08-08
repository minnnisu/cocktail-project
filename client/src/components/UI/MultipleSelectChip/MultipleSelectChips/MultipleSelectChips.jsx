import MultipleSelectChip from "../MultipleSelectChip";
import style from "./MultipleSelectChips.module.css";

function MultipleSelectChips({ selectChips, setSelectChips }) {
  const handleRemoveButtonClick = (targetIndex) => {
    setSelectChips(selectChips.filter((_, index) => index !== targetIndex));
  };

  return (
    <div className={style.multiple_select_chips_container}>
      {selectChips.map((taste, index) => (
        <div key={index} className="d-flex">
          <MultipleSelectChip
            onClickRemoveButton={() => handleRemoveButtonClick(index)}
          >
            {taste}
          </MultipleSelectChip>
        </div>
      ))}
    </div>
  );
}

export default MultipleSelectChips;
