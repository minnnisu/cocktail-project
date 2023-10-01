import styles from "./CocktailDetailContainer.module.css";
import CocktailDetailInfo from "../CocktailDetailInfo/CocktailDetailInfo";
import CocktailDetailRecipe from "../CocktailDetailRecipe/CocktailDetailRecipe";

function CocktailDetailContainer({ cockail }) {
  return (
    <div className={styles.container}>
      <CocktailDetailInfo
        image_path={cockail.image_path}
        name={cockail.name}
        tastes={cockail.tastes}
        garnishes={cockail.garnishes}
        alcohols={cockail.alcohols}
        nonAlcohols={cockail.nonAlcohols}
      />
      <CocktailDetailRecipe recipe={cockail.recipe} />
    </div>
  );
}

export default CocktailDetailContainer;
