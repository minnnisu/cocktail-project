import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";

function Dropdown({ title, name, options, handleSelectedValueChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    handleSelectedValueChange(e);
  };

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.dropdown_name}>{title}</div>
      <select
        className={styles.dropdown_value}
        name={name}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value={null}>선택</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
