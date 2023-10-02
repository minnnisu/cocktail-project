import styles from "../CocktailItemInfoItem.module.css";

function TasteItem({ item }) {
  return <span className={styles.item}>{item}</span>;
}

export default TasteItem;
