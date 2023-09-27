import React from "react";
import AlcoholItem from "../AlcoholItem/AlcoholItem";

function AlcoholList({
  ingredientList,
  setIngredientList,
  selectedAlcohol,
  setSelectedAlcohol,
}) {
  const handleAlcoholClick = (selectedAlcohol) => {
    const alcohol = ingredientList.alcohols.find(
      (alcohol) => alcohol.name === selectedAlcohol.alcoholName
    );

    if (selectedAlcohol.subAlcoholName) {
      const subAlcohol = alcohol.subAlcohols.find(
        (subAlcohol) => subAlcohol.name === selectedAlcohol.subAlcoholName
      );

      if (subAlcohol.isSelect) {
        setSelectedAlcohol((prev) =>
          prev.filter((alcohol) => {
            console.log(alcohol?.subAlcoholName);
            console.log(selectedAlcohol?.subAlcoholName);
            return !(
              alcohol.alcoholName === selectedAlcohol.alcoholName &&
              alcohol?.subAlcoholName === selectedAlcohol.subAlcoholName
            );
          })
        );
      } else {
        setSelectedAlcohol((prev) => [...prev, selectedAlcohol]);
      }
      subAlcohol.isSelect = !subAlcohol.isSelect;
    } else {
      if (alcohol.isSelect) {
        setSelectedAlcohol((prev) =>
          prev.filter(
            (alcohol) => alcohol.alcoholName !== selectedAlcohol.alcoholName
          )
        );
      } else {
        setSelectedAlcohol((prev) => [...prev, selectedAlcohol]);
      }
      alcohol.isSelect = !alcohol.isSelect;
    }

    setIngredientList((prev) => ({ ...prev, alcohol }));
  };
  return (
    <>
      {selectedAlcohol.map((selectedAlcohol, index) => (
        <AlcoholItem
          key={index}
          selectedAlcohol={selectedAlcohol}
          handleAlcoholClick={handleAlcoholClick}
        />
      ))}
    </>
  );
}

export default AlcoholList;
