import React from "react";

function SelectedIngredient({
  ingredientList,
  setIngredientList,
  selectedAlcohol,
  setSelectedAlcohol,
  selectedNonAlcohol,
  setSelectedNonAlcohol,
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
      {selectedAlcohol.map((selectedAlcohol, index) => (
        <React.Fragment key={index}>
          <div onClick={() => handleAlcoholClick(selectedAlcohol)}>{`${
            selectedAlcohol.alcoholName
          }${
            selectedAlcohol.subAlcoholName
              ? `(${selectedAlcohol.subAlcoholName})`
              : ""
          }`}</div>
        </React.Fragment>
      ))}
      {selectedNonAlcohol.map((selectedNonAlcohol, index) => (
        <React.Fragment key={index}>
          <div onClick={() => handleNonAlcoholClick(selectedNonAlcohol)}>
            {selectedNonAlcohol.nonAlcoholName}
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default SelectedIngredient;
