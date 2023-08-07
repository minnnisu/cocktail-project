import NameForm from "./NameForm";
import TasteForm from "./TasteForm";
import GarnishForm from "./GarnishForm";
import IngredientForm from "./IngredientForm/IngredientForm";
import GlassForm from "./GlassForm";
import ImageForm from "./ImageForm";
import CocktailMakeForm from "./CocktailMakeForm";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import Viewer from "./Viewer/Viewer";
import CommentForm from "./CommentForm";

function CockTailFormContainer(params) {
  const [cocktailInfo, setCocktailInfo] = useState({
    name: "",
    ingredients: [],
    tastes: [],
    garnishs: [],
    glass: "",
    cocktailMake: "",
    comments: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);

  console.log(cocktailInfo);

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
      <Viewer />
    </>
  );
}

export default CockTailFormContainer;
