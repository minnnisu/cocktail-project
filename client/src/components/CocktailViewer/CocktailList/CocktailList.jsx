import Outer from "../../../components/UI/Outer/Outer";
import RowLayout from "../../../layouts/RowLayout/RowLayout";
import KeyArrayItem from "../../UI/KeyValueItem/KeyArrayItem/KeyArrayItem";
import KeyTextItem from "../../UI/KeyValueItem/KeyTextItem/KeyTextItem";
import Title from "../../UI/Title/Title";
import CocktailAlcoholList from "../CocktailAlcoholList/CocktailAlcoholList";
import CocktailImage from "../CocktailImage/CocktailImage";
import CocktailNonAlcoholList from "../CocktailNonAlcoholList/CocktailNonAlcoholList";
import styles from "./CocktailList.module.css";
const { url } = require("../../../apis/config/domain");

function CocktailList({ cocktails }) {
  return (
    <>
      <div className={styles.title_container}>
        <Title size={3}>칵테일 목록</Title>
      </div>
      <RowLayout>
        {cocktails.map((cocktail, cocktailIndex) => (
          <div key={cocktailIndex} className={styles.cocktail_container}>
            <Outer titleSize={4} title={cocktail.name}>
              <KeyArrayItem name={"맛"} array={cocktail.tastes} />
              <KeyArrayItem name={"가니쉬"} array={cocktail.garnishes} />
              <KeyTextItem name={"조주 기법"} text={cocktail.recipe} />
              <CocktailAlcoholList alcohols={cocktail.alcohols} />
              <CocktailNonAlcoholList nonAlcohols={cocktail.nonAlcohols} />
              <CocktailImage src={`${url}/${cocktail.image_path}`} />
            </Outer>
          </div>
        ))}
      </RowLayout>
    </>
  );
}

export default CocktailList;
