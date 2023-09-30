import React from "react";
import styles from "./SelectedIngredient.module.css";
import Title from "../../../components/UI/Title/Title";
import AlcoholList from "./AlcoholList/AlcoholList";
import NonAlcoholList from "./NonAlcoholList/NonAlcoholList";
import Button from "../../../components/UI/Button/Button";

function SelectedIngredient({
  ingredientList,
  setIngredientList,
  selectedAlcohol,
  setSelectedAlcohol,
  selectedNonAlcohol,
  setSelectedNonAlcohol,
  handleSearchButtonClick,
}) {
  return (
    <div className={styles.selected_ingredient}>
      <div className={styles.header}>
        <Title size={5}>선택된 재료</Title>
        <Button onClickButton={handleSearchButtonClick}>검색</Button>
      </div>
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
