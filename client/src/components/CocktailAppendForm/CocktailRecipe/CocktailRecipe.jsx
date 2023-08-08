import Outer from "../../../layouts/CocktailAppendForm/Outer";
import Textarea from "../../UI/Textarea/Textarea";

function CocktailRecipe({ cocktailRecipe, setCocktailRecipe }) {
  const handleCocktailRecipeChange = (value) => {
    setCocktailRecipe(value);
  };
  return (
    <Outer title={"조주 기법"}>
      <Textarea onChangeTextarea={handleCocktailRecipeChange} />
    </Outer>
  );
}

export default CocktailRecipe;
