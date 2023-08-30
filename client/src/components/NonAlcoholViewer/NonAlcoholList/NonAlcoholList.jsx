import RowLayout from "../../../layouts/RowLayout/RowLayout";
import IngredientCocktailMap from "../../IngredientCocktailMap/IngredientCocktailMap";
import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import style from "./NonAlcoholList.module.css";

import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";
function NonAlcoholList({ nonAlcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={3}>기타재료 목록</Title>
      </div>
      <RowLayout>
        {nonAlcohols.map((nonAlcohol, nonAlcoholIndex) => (
          <Outer key={nonAlcoholIndex} title={nonAlcohol.name} size={4}>
            <IngredientCocktailMap cocktails={nonAlcohol.cocktails} />
          </Outer>
        ))}
      </RowLayout>
    </>
  );
}

export default NonAlcoholList;
