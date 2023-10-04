import styles from "../CocktailItemInfoItem.module.css";

function NonAlcoholItem({ item, isInclude }) {
  return (
    <div>
      <span className={`${styles.item} ${isInclude ? styles.include : ""}`}>
        {item.name}
      </span>
    </div>
  );
}

export default NonAlcoholItem;
