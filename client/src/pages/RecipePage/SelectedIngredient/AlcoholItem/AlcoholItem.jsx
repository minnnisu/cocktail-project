import styles from "../../shared/SelectedItem.module.css";

function AlcoholItem({ selectedAlcohol, handleAlcoholClick }) {
  return (
    <div
      className={styles.item}
      onClick={() => handleAlcoholClick(selectedAlcohol)}
    >{`${
      selectedAlcohol.subAlcoholName
        ? `${selectedAlcohol.subAlcoholName}`
        : selectedAlcohol.alcoholName
    }`}</div>
  );
}

export default AlcoholItem;
