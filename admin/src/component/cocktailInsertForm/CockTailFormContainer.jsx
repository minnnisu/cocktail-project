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
import CommentForm from "./CommentForm";

function CockTailFormContainer(params) {
  const [cocktailInfo, setCocktailInfo] = useState({
    name: { en: "", ko: "" },
    ingredients: [],
    tastes: [],
    garnishs: [],
    glass: "",
    cocktailMake: "",
    image_url: "",
    comments: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <NameForm setCocktailInfo={setCocktailInfo} />
      <ImageForm setSelectedImage={setSelectedImage} />
      <TasteForm
        tastes={cocktailInfo.tastes}
        setCocktailInfo={setCocktailInfo}
      />
      <IngredientForm
        ingredients={cocktailInfo.ingredients}
        setCocktailInfo={setCocktailInfo}
      />
      <GarnishForm
        garnishs={cocktailInfo.garnishs}
        setCocktailInfo={setCocktailInfo}
      />
      <GlassForm setCocktailInfo={setCocktailInfo} />
      <CocktailMakeForm setCocktailInfo={setCocktailInfo} />
      <CommentForm
        comments={cocktailInfo.comments}
        setCocktailInfo={setCocktailInfo}
      />
      <SubmitButton
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        cocktailInfo={cocktailInfo}
        setCocktailInfo={setCocktailInfo}
      />
      <CocktailInfoViewer />
    </>
  );
}

export default CockTailFormContainer;
