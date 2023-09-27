import React from "react";
import styles from "./SelectedIngredient.module.css";
import Title from "../../../components/UI/Title/Title";
import AlcoholList from "./AlcoholList/AlcoholList";
import NonAlcoholList from "./NonAlcoholList/NonAlcoholList";

function SelectedIngredient({
  ingredientList,
  setIngredientList,
  selectedAlcohol,
  setSelectedAlcohol,
  selectedNonAlcohol,
  setSelectedNonAlcohol,
}) {
  return (
    <div className={styles.selected_ingredient}>
      <Title size={5}>선택된 재료</Title>
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
