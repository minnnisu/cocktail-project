import style from "./SubAlcoholList.module.css";
import Title from "../../../UI/Title/Title";
import KeyValueItem from "../../../UI/KeyValueItem/KeyValueItem";
import IngredientCocktailMap from "../../../IngredientCocktailMap/IngredientCocktailMap";
import { Fragment } from "react";

function SubAlcoholList({ subAlcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={5}>하위 알코올</Title>
      </div>
      <div className={style.sub_alcohol_container}>
        {subAlcohols.map((subAlcohol, subAlcoholIndex) => (
          <div className={style.inner_container} key={subAlcoholIndex}>
            <KeyValueItem name={"이름"} value={subAlcohol.name} />
            <KeyValueItem name={"도수"} value={subAlcohol.abv} />
            <IngredientCocktailMap cocktails={subAlcohol.cocktails} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SubAlcoholList;
