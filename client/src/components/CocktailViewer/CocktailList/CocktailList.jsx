import RowLayout from "../../../layouts/RowLayout/RowLayout";
import KeyArrayItem from "../../UI/KeyValueItem/KeyArrayItem/KeyArrayItem";
import KeyTextItem from "../../UI/KeyValueItem/KeyTextItem/KeyTextItem";
import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import Card from "../../UI/Wrapper/Card/Card";
import CocktailAlcoholList from "../CocktailAlcoholList/CocktailAlcoholList";
import CocktailNonAlcoholList from "../CocktailNonAlcoholList/CocktailNonAlcoholList";
import style from "./CocktailList.module.css";
const { url } = require("../../../apis/config/domain");

function CocktailList({ cocktails }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={3}>칵테일 목록</Title>
      </div>
      <RowLayout>
        {cocktails.map((cocktail, cocktailIndex) => (
          <div key={cocktailIndex} className={style.cocktail_container}>
            <Card>
              <div className={style.cocktail_inner}>
                <KeyValueItem name={"이름"} value={cocktail.name} />
                <KeyArrayItem name={"맛"} array={cocktail.tastes} />
                <KeyArrayItem name={"가니쉬"} array={cocktail.garnishes} />
                <KeyTextItem name={"조주 기법"} text={cocktail.recipe} />
                <CocktailAlcoholList alcohols={cocktail.alcohols} />
                <CocktailNonAlcoholList nonAlcohols={cocktail.nonAlcohols} />
                <img
                  className={style.cocktail_image}
                  src={`${url}/${cocktail.image_path}`}
                  alt="칵테일 이미지"
                ></img>
              </div>
            </Card>
          </div>
        ))}
      </RowLayout>
    </>
  );
}

export default CocktailList;
