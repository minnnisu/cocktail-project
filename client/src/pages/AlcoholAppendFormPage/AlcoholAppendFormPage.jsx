import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NameForm from "../../components/AlcoholAppendForm/NameForm/NameForm";
import MultipleSelectChipForm from "../../components/AlcoholAppendForm/MultipleSelectChipForm/MultipleSelectChipForm";
import GlassesForm from "../../components/AlcoholAppendForm/GlassesForm/GlassesForm";
import IngredientForm from "../../components/AlcoholAppendForm/IngredientForm/IngredientForm";
import BaseSpiritAppendForm from "../../components/AlcoholAppendForm/BaseSpiritAppendForm/BaseSpiritAppendForm";
import CocktailRecipe from "../../components/AlcoholAppendForm/CocktailRecipe/CocktailRecipe";
import ImageForm from "../../components/AlcoholAppendForm/ImageForm/ImageForm";
import AlcoholAppendContainerLayout from "../../layouts/AlcoholAppendFormLayout/CocktailAppendContainerLayout/AlcoholAppendContainerLayout";
import AlcoholAppendColumnLayout from "../../layouts/AlcoholAppendFormLayout/AlcoholAppendColumnLayout/AlcoholAppendColumnLayout";
import AlcoholAppendFormControl from "../../components/AlcoholAppendForm/AlcoholAppendFormControl/AlcoholAppendFormControl";

function AlcoholAppendFormPage() {
  const [cocktailName, setCocktailName] = useState({});
  const [tastes, setTastes] = useState([]);
  const [garnishs, setGarnishs] = useState([]);
  const [comments, setComments] = useState([]);
  const [glass, setGlass] = useState("콜린스");
  const [ingredients, setIngredients] = useState([]);
  const [cocktailRecipe, setCocktailRecipe] = useState("");
  const [image, setImage] = useState({
    image_file: null,
    preview_URL: null,
  });

  const submitData = {
    name: cocktailName["이름"],
    ingredients: ingredients,
    tastes: tastes,
    garnishs: garnishs,
    glass: glass,
    recipe: cocktailRecipe,
    comments: comments,
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AlcoholAppendContainerLayout>
        <AlcoholAppendColumnLayout>
          <NameForm
            cocktailName={cocktailName}
            setCocktailName={setCocktailName}
          />
          <ImageForm image={image} setImage={setImage} />
          <IngredientForm
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <BaseSpiritAppendForm />
        </AlcoholAppendColumnLayout>
        <AlcoholAppendColumnLayout>
          <MultipleSelectChipForm
            title={"맛"}
            selectChips={tastes}
            setSelectChips={setTastes}
          />
          <MultipleSelectChipForm
            title={"가니쉬"}
            selectChips={garnishs}
            setSelectChips={setGarnishs}
          />
          <GlassesForm glass={glass} setGlass={setGlass} />
          <MultipleSelectChipForm
            title={"코멘트"}
            selectChips={comments}
            setSelectChips={setComments}
          />
          <CocktailRecipe
            cocktailRecipe={cocktailRecipe}
            setCocktailRecipe={setCocktailRecipe}
          />
          <AlcoholAppendFormControl
            submitData={submitData}
            submitImageData={image.image_file}
          />
        </AlcoholAppendColumnLayout>
      </AlcoholAppendContainerLayout>
    </QueryClientProvider>
  );
}

export default AlcoholAppendFormPage;
