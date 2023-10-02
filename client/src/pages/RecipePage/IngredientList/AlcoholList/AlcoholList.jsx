import React, { useState } from "react";
import AlcoholItem from "../AlcoholItem/AlcoholItem";
import styles from "./AlcoholList.module.css";
import SubAlcoholList from "../SubAlcoholList/SubAlcoholList";

function AlcoholList({
  ingredientList,
  setIngredientList,
  setSelectedAlcohol,
  alcohols,
}) {
  const [subAlcoholComponent, setSubAlcoholComponent] = useState({
    state: false,
    data: { alcoholName: "", subAlcohols: [] },
  });

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
    <div className={styles.alcohol_list}>
      <div className={styles.alcohol_list_wrapper}>
        {alcohols.map((alcohol, index) => {
          return (
            <AlcoholItem
              key={index}
              alcohol={alcohol}
              setSubAlcoholComponent={setSubAlcoholComponent}
              handleAlcoholClick={handleAlcoholClick}
            />
          );
        })}
      </div>
      {subAlcoholComponent.state && (
        <SubAlcoholList
          alcoholName={subAlcoholComponent.data.alcoholName}
          subAlcohols={subAlcoholComponent.data.subAlcohols}
          handleAlcoholClick={handleAlcoholClick}
        />
      )}
    </div>
  );
}

export default AlcoholList;
