import { useEffect, useMemo, useState } from "react";
import { useAlcoholGetApi } from "../../hooks/useAlcoholApi";
import { useNonAlcoholGetApi } from "../../hooks/useNonAlcoholApi";
import AlcoholList from "./AlcoholList/AlcoholList";
import NonAlcoholList from "./NonAlcoholList/NonAlcoholList";
import SelectedIngredient from "./SelectedIngredient/SelectedIngredient";

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

  useEffect(() => {
    if (alcohols && nonAlcohols) {
      setIngredientList({ alcohols, nonAlcohols });
    }
  }, [alcohols, nonAlcohols]);

  return (
    <>
      <SelectedIngredient
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        selectedAlcohol={selectedAlcohol}
        setSelectedAlcohol={setSelectedAlcohol}
        selectedNonAlcohol={selectedNonAlcohol}
        setSelectedNonAlcohol={setSelectedNonAlcohol}
      />
      {ingredientList && (
        <>
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
        </>
      )}
    </>
  );
}

export default RecipePage;
