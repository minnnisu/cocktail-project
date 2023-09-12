import styles from "./AlcoholAppendContainerLayout.module.css";

function CocktailAppendContainerLayout({ children }) {
  return (
    <div className={styles.cocktail_append_from_container}>{children}</div>
  );
}
export default CocktailAppendContainerLayout;
