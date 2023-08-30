import KeyArrayItem from "../UI/KeyValueItem/KeyArrayItem/KeyArrayItem";

function IngredientCocktailMap({ cocktails }) {
  const cocktailNames = cocktails.map((cocktail) => {
    return cocktail.name;
  });

  return <KeyArrayItem name={"칵테일"} array={cocktailNames} />;
}

export default IngredientCocktailMap;
