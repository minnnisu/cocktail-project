import React from "react";
import styles from "./SelectedIngredient.module.css";
import AlcoholList from "./AlcoholList/AlcoholList";
import NonAlcoholList from "./NonAlcoholList/NonAlcoholList";
import Header from "./Header/Header";

function SelectedIngredient({
  ingredientList,
  setIngredientList,
  selectedAlcohol,
  setSelectedAlcohol,
  selectedNonAlcohol,
  setSelectedNonAlcohol,
  setCocktailQueryParameter,
}) {
  return (
    <div className={styles.selected_ingredient}>
      <Header
        selectedNonAlcohol={selectedNonAlcohol}
        selectedAlcohol={selectedAlcohol}
        setCocktailQueryParameter={setCocktailQueryParameter}
      />
      <div className={styles.selected_ingredient_wrapper}>
        <AlcoholList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          selectedAlcohol={selectedAlcohol}
          setSelectedAlcohol={setSelectedAlcohol}
        />
        <NonAlcoholList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          selectedNonAlcohol={selectedNonAlcohol}
          setSelectedNonAlcohol={setSelectedNonAlcohol}
        />
      </div>
    </div>
  );
}

export default SelectedIngredient;
