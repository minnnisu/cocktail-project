import NameForm from "./NameForm";
import TasteForm from "./TasteForm";
import GarnishForm from "./GarnishForm";
import IngredientForm from "./IngredientForm/IngredientForm";
import GlassForm from "./GlassForm";
import ImageForm from "./ImageForm";
import CocktailMakeForm from "./CocktailMakeForm";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import CocktailInfoViewer from "./CocktailInfoViewer";

function CockTailFormContainer(params) {
  const [cocktailInfo, setCocktailInfo] = useState({
    name: { en: "", ko: "" },
    ingredients: [],
    tastes: [],
    garnish: { en: "", ko: "" },
    glass: "",
    cocktailMake: "",
    image_url: "",
  });

  console.log(cocktailInfo);

  return (
    <>
      <NameForm setCocktailInfo={setCocktailInfo} />
      <ImageForm setCocktailInfo={setCocktailInfo} />
      {/* 엔터 클릭 시 새로고침 되어버림 */}
      <TasteForm
        tastes={cocktailInfo.tastes}
        setCocktailInfo={setCocktailInfo}
      />
      <IngredientForm
        ingredients={cocktailInfo.ingredients}
        setCocktailInfo={setCocktailInfo}
      />
      <GarnishForm setCocktailInfo={setCocktailInfo} />
      <GlassForm setCocktailInfo={setCocktailInfo} />
      <CocktailMakeForm setCocktailInfo={setCocktailInfo} />
      <SubmitButton
        cocktailInfo={cocktailInfo}
        setCocktailInfo={setCocktailInfo}
      />
      <CocktailInfoViewer />
    </>
  );
}

export default CockTailFormContainer;
