import styles from "./CocktailDetailInfoItem.module.css";

function CocktailDetailInfoItem({ name, value }) {
  return (
    <>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </>
  );
}

export default CocktailDetailInfoItem;
