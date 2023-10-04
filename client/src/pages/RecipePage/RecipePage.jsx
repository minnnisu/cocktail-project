import { useEffect, useState } from "react";
import { useAlcoholGetApi } from "../../hooks/useAlcoholApi";
import { useNonAlcoholGetApi } from "../../hooks/useNonAlcoholApi";
import SelectedIngredient from "./SelectedIngredient/SelectedIngredient";
import CocktailList from "./CocktailList/CocktailList";
import IngredientList from "./IngredientList/IngredientList";
import styles from "./RecipePage.module.css";

function RecipePage() {
  const { data: alcohols } = useAlcoholGetApi("?summary=true", {
    staleTime: 60 * 60000,
  });
  const { data: nonAlcohols } = useNonAlcoholGetApi("?summary=true", {
    staleTime: 60 * 60000,
  });

  const [ingredientList, setIngredientList] = useState(null);
  const [selectedAlcohol, setSelectedAlcohol] = useState([]);
  const [selectedNonAlcohol, setSelectedNonAlcohol] = useState([]);
  const [cocktailQueryParameter, setCocktailQueryParameter] = useState([]);

  useEffect(() => {
    if (alcohols && nonAlcohols) {
      setIngredientList({ alcohols, nonAlcohols });
    }
  }, [alcohols, nonAlcohols]);

  return (
    <div className={styles.recipe_page}>
      {ingredientList && (
        <IngredientList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          setSelectedAlcohol={setSelectedAlcohol}
          setSelectedNonAlcohol={setSelectedNonAlcohol}
        />
      )}
      <SelectedIngredient
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        selectedAlcohol={selectedAlcohol}
        selectedNonAlcohol={selectedNonAlcohol}
        setSelectedAlcohol={setSelectedAlcohol}
        setSelectedNonAlcohol={setSelectedNonAlcohol}
        setCocktailQueryParameter={setCocktailQueryParameter}
      />
      {cocktailQueryParameter.length > 0 && (
        <CocktailList
          cocktailQueryParameter={cocktailQueryParameter}
          selectedAlcohol={selectedAlcohol}
          selectedNonAlcohol={selectedNonAlcohol}
        />
      )}
    </div>
  );
}

export default RecipePage;
