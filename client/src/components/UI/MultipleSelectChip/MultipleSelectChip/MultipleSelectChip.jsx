import style from "./MultipleSelectChip.module.css";

function MultipleSelectChip({ onClickRemoveButton, children }) {
  return (
    <div className={style.multiple_select_chip_container}>
      <div className={style.name}>{children}</div>
      <div className={style.remove_button} onClick={onClickRemoveButton}>
        X
      </div>
    </div>
  );
}

export default MultipleSelectChip;
