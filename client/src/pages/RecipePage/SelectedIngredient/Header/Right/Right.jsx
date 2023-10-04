import Dropdown from "../Dropdown/Dropdown";
import Button from "../../../../../components/UI/Button/Button";
import { useState } from "react";
import styles from "./Right.module.css";

function Right({
  selectedAlcohol,
  selectedNonAlcohol,
  setCocktailQueryParameter,
}) {
  const [mode, setMode] = useState("union");
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const findIntersection = (arrays) => {
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
    if (mode === "intersection") {
      // 교집합
      setCocktailQueryParameter(
        JSON.stringify(
          findIntersection([
            ...selectedAlcohol.map((alcohol) => alcohol.cocktails),
            ...selectedNonAlcohol.map((nonAlcohol) => nonAlcohol.cocktails),
          ])
        )
      );
    }

    if (mode === "union") {
      // 합집합
      setCocktailQueryParameter(
        JSON.stringify(
          findUnion([
            ...selectedAlcohol.map((alcohol) => alcohol.cocktails),
            ...selectedNonAlcohol.map((nonAlcohol) => nonAlcohol.cocktails),
          ])
        )
      );
    }
  };
  return (
    <div className={styles.right}>
      <Dropdown mode={mode} handleModeChange={handleModeChange} />
      <Button onClickButton={handleSearchButtonClick}>검색</Button>
    </div>
  );
}

export default Right;
