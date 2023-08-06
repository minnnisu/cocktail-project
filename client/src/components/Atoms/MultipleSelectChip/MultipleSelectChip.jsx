import style from "./MultipleSelectChip.module.css";

function MultipleSelectChip({ name, handleRemoveButtonClick }) {
  return (
    <div className={style.multiple_select_chip_container}>
      <div className={style.name}>{name}</div>
      <div onClick={handleRemoveButtonClick}>X</div>
    </div>
  );
}

export default MultipleSelectChip;
