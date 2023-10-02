import AlcoholList from "./AlcoholList/AlcoholList";
import NonAlcoholList from "./NonAlcoholList/NonAlcoholList";
import styles from "./IngredientList.module.css";
import { useState } from "react";
import Header from "./Header/Header";

function IngredientList({
  ingredientList,
  setIngredientList,
  setSelectedAlcohol,
  setSelectedNonAlcohol,
}) {
  const [menu, setMenu] = useState(0);

  const handleMenuClick = (index) => {
    setMenu(index);
  };

  return (
    <div className={styles.ingredient_list}>
      <Header menu={menu} handleMenuClick={handleMenuClick} />
      {menu === 0 && (
        <AlcoholList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          setSelectedAlcohol={setSelectedAlcohol}
          alcohols={ingredientList.alcohols}
        />
      )}
      {menu === 1 && (
        <NonAlcoholList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          setSelectedNonAlcohol={setSelectedNonAlcohol}
          nonAlcohols={ingredientList.nonAlcohols}
        />
      )}
    </div>
  );
}

export default IngredientList;
