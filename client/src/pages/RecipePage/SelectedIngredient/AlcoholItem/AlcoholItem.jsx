import styles from "../../shared/Item.module.css";

function AlcoholItem({ selectedAlcohol, handleAlcoholClick }) {
  return (
    <div
      className={styles.item}
      onClick={() => handleAlcoholClick(selectedAlcohol)}
    >{`${selectedAlcohol.alcoholName}${
      selectedAlcohol.subAlcoholName
        ? `(${selectedAlcohol.subAlcoholName})`
        : ""
    }`}</div>
  );
}

export default AlcoholItem;
