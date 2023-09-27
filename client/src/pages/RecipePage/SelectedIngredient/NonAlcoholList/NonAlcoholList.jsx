import React from "react";
import styles from "./NonAlcoholList.module.css";
import NonAlcoholItem from "../NonAlcoholItem/NonAlcoholItem";

function NonAlcoholList({
  ingredientList,
  setIngredientList,
  selectedNonAlcohol,
  setSelectedNonAlcohol,
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
      {selectedNonAlcohol.map((selectedNonAlcohol, index) => (
        <NonAlcoholItem
          key={index}
          selectedNonAlcohol={selectedNonAlcohol}
          handleNonAlcoholClick={handleNonAlcoholClick}
        />
      ))}
    </>
  );
}

export default NonAlcoholList;
