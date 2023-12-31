import styles from "../../shared/SelectedItem.module.css";

function NonAlcoholItem({ selectedNonAlcohol, handleNonAlcoholClick }) {
  return (
    <div
      className={styles.item}
      onClick={() => handleNonAlcoholClick(selectedNonAlcohol)}
    >
      {selectedNonAlcohol.nonAlcoholName}
    </div>
  );
}

export default NonAlcoholItem;
