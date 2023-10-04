import styles from "./Dropdown.module.css";

function Dropdown({ mode, handleModeChange }) {
  return (
    <div className={styles.dropdown_container}>
      <div className={styles.name}>검색방식</div>
      <select value={mode} onChange={handleModeChange}>
        <option value={"union"}>합집합</option>
        <option value={"intersection"}>교집합</option>
      </select>
    </div>
  );
}

export default Dropdown;
