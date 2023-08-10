import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";
import Textarea from "../../UI/Textarea/Textarea";
import style from "./CocktailRecipe.module.css";

function CocktailRecipe({ setCocktailRecipe }) {
  const handleCocktailRecipeChange = (value) => {
    setCocktailRecipe(value);
  };
  return (
    <Outer title={"조주 기법"}>
      <div className={style.text_area_container}>
        <Textarea onChangeTextarea={handleCocktailRecipeChange} />
      </div>
    </Outer>
  );
}

export default CocktailRecipe;
