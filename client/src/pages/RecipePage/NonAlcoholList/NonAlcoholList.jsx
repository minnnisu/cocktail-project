import React from "react";
import NonAlcoholItem from "../NonAlcoholItem/NonAlcoholItem";

function NonAlcoholList({
  ingredientList,
  setIngredientList,
  setSelectedNonAlcohol,
  nonAlcohols,
}) {
  const handleNonAlcoholClick = (selectedNonAlcohol) => {
    const nonAlcohol = ingredientList.nonAlcohols.find(
      (nonAlcohol) => nonAlcohol.name === selectedNonAlcohol.nonAlcoholName
    );

    if (nonAlcohol.isSelect) {
      setSelectedNonAlcohol((prev) =>
        prev.filter(
          (nonAlcohol) =>
            nonAlcohol.nonAlcoholName !== selectedNonAlcohol.nonAlcoholName
        )
      );
    } else {
      setSelectedNonAlcohol((prev) => [...prev, selectedNonAlcohol]);
    }
    nonAlcohol.isSelect = !nonAlcohol.isSelect;

    setIngredientList((prev) => ({ ...prev, nonAlcohol }));
  };

  return (
    <>
      {nonAlcohols.map((nonAlcohol, index) => {
        return (
          <NonAlcoholItem
            key={index}
            nonAlcohol={nonAlcohol}
            handleNonAlcoholClick={handleNonAlcoholClick}
          />
        );
      })}
    </>
  );
}

export default NonAlcoholList;
