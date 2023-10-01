import styles from "./CocktailDetailRecipe.module.css";

function CocktailDetailRecipe({ recipe }) {
  const formattedText = recipe.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className={styles.recipe_wrapper}>
      <div className={styles.title}>제조방법</div>
      <div className={styles.recipe}>{formattedText}</div>
    </div>
  );
}

export default CocktailDetailRecipe;
