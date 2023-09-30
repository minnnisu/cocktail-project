import AlcoholList from "./AlcoholList/AlcoholList";
import NonAlcoholList from "./NonAlcoholList/NonAlcoholList";
import styles from "./IngredientList.module.css";

function IngredientList({
  ingredientList,
  setIngredientList,
  setSelectedAlcohol,
  setSelectedNonAlcohol,
}) {
  return (
    <div className={styles.ingredient_list}>
      <AlcoholList
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        setSelectedAlcohol={setSelectedAlcohol}
        alcohols={ingredientList.alcohols}
      />
      <NonAlcoholList
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        setSelectedNonAlcohol={setSelectedNonAlcohol}
        nonAlcohols={ingredientList.nonAlcohols}
      />
    </div>
  );
}

export default IngredientList;
