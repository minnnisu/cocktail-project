import RowLayout from "../../../layouts/RowLayout/RowLayout";
import IngredientCocktailMap from "../../IngredientCocktailMap/IngredientCocktailMap";
import Title from "../../UI/Title/Title";
import styles from "./NonAlcoholList.module.css";
import Outer from "../../../components/UI/Outer/Outer";

function NonAlcoholList({ nonAlcohols }) {
  return (
    <>
      <div className={styles.title_container}>
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
