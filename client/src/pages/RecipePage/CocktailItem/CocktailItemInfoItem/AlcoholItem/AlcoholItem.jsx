import styles from "../CocktailItemInfoItem.module.css";

function AlcoholItem({ item }) {
  return (
    <span className={styles.item}>{`${
      item.subAlcoholName ? `${item.subAlcoholName}` : `${item.name}`
    }`}</span>
  );
}

export default AlcoholItem;
