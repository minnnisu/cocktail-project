import styles from "../CocktailItemInfoItem.module.css";

function AlcoholItem({ item, isInclude }) {
  return (
    <div>
      <span className={`${styles.item} ${isInclude ? styles.include : ""}`}>{`${
        item.subAlcoholName ? `${item.subAlcoholName}` : `${item.name}`
      }`}</span>
    </div>
  );
}

export default AlcoholItem;
