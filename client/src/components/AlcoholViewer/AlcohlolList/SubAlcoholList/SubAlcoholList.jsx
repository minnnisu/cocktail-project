import styles from "./SubAlcoholList.module.css";
import Title from "../../../UI/Title/Title";
import KeyValueItem from "../../../UI/KeyValueItem/KeyValueItem";
import IngredientCocktailMap from "../../../IngredientCocktailMap/IngredientCocktailMap";

function SubAlcoholList({ subAlcohols }) {
  return (
    <>
      <div className={styles.title_container}>
        <Title size={5}>하위 알코올</Title>
      </div>
      <div className={styles.sub_alcohol_container}>
        {subAlcohols.map((subAlcohol, subAlcoholIndex) => (
          <div className={styles.inner_container} key={subAlcoholIndex}>
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
