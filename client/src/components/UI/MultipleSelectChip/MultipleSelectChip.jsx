import styles from "./MultipleSelectChip.module.css";

function MultipleSelectChip({ onClickRemoveButton, children }) {
  return (
    <div className={styles.multiple_select_chip_container}>
      <div className={styles.name}>{children}</div>
      <div className={styles.remove_button} onClick={onClickRemoveButton}>
        X
      </div>
    </div>
  );
}

export default MultipleSelectChip;
