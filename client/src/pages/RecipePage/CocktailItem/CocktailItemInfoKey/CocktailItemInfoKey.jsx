import styles from "./CocktailItemInfoKey.module.css";

function CocktailItemInfoTitle({ title }) {
  return (
    <>
      <span className={styles.title} size={5}>
        {title}
      </span>
      <span></span>
    </>
  );
}

export default CocktailItemInfoTitle;
