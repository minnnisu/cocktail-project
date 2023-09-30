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

  const findIntersection = (arrays) => {
    // 교집합
    if (!arrays || arrays.length === 0) {
      return [];
    }

    // 첫 번째 배열을 초기 교집합으로 설정
    let intersection = new Set(arrays[0]);

    // 나머지 배열과 비교하여 교집합을 갱신
    for (let i = 1; i < arrays.length; i++) {
      const currentArray = new Set(arrays[i]);
      intersection = new Set(
        [...intersection].filter((element) => currentArray.has(element))
      );
    }

    return Array.from(intersection);
  };

  const findUnion = (arrays) => {
    let newArray = [];
    for (let i = 1; i < arrays.length; i++) {
      newArray = [...newArray, ...arrays[i]];
    }

    const union = [...new Set(newArray)];
    return union;
  };

  const handleSearchButtonClick = () => {
    // setCocktailQueryParameter(
    //   JSON.stringify(
    //     findIntersection([
    //       ...selectedAlcohol.map((alcohol) => alcohol.cocktails),
    //       ...selectedNonAlcohol.map((nonAlcohol) => nonAlcohol.cocktails),
    //     ])
    //   )
    // );

    setCocktailQueryParameter(
      JSON.stringify(
        findUnion([
          ...selectedAlcohol.map((alcohol) => alcohol.cocktails),
          ...selectedNonAlcohol.map((nonAlcohol) => nonAlcohol.cocktails),
        ])
      )
    );
  };

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
        setSelectedAlcohol={setSelectedAlcohol}
        selectedNonAlcohol={selectedNonAlcohol}
        setSelectedNonAlcohol={setSelectedNonAlcohol}
        handleSearchButtonClick={handleSearchButtonClick}
      />
      {cocktailQueryParameter.length > 0 && (
        <CocktailList cocktailQueryParameter={cocktailQueryParameter} />
      )}
    </div>
  );
}

export default RecipePage;
