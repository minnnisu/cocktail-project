import styles from "./CocktailDetailTitle.module.css";

function CocktailDetailTitle({ name }) {
  return (
    <div className={styles.title_wrapper}>
      <span className={styles.title}>{name}</span>
    </div>
  );
}

export default CocktailDetailTitle;
