import styles from "../CocktailItemInfoItem.module.css";

function NonAlcoholItem({ item }) {
  return <span className={styles.item}>{item.name}</span>;
}

export default NonAlcoholItem;
