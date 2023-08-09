import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NameForm from "../../components/CocktailAppendForm/NameForm/NameForm";
import MultipleSelectChipForm from "../../components/CocktailAppendForm/MultipleSelectChipForm/MultipleSelectChipForm";
import GlassesForm from "../../components/CocktailAppendForm/GlassesForm/GlassesForm";
import IngredientForm from "../../components/CocktailAppendForm/IngredientForm/IngredientForm";
import BaseSpiritAppendForm from "../../components/CocktailAppendForm/BaseSpiritAppendForm/BaseSpiritAppendForm";
import CocktailRecipe from "../../components/CocktailAppendForm/CocktailRecipe/CocktailRecipe";
import ImageForm from "../../components/CocktailAppendForm/ImageForm/ImageForm";
import CocktailAppendContainerLayout from "../../layouts/CocktailAppendForm/CocktailAppendContainerLayout/CocktailAppendContainerLayout";
import CocktailAppendColumnLayout from "../../layouts/CocktailAppendForm/CocktailAppendColumnLayout/CocktailAppendColumnLayout";

function CocktailAppendFormPage() {
  const [nameForm, setNameForm] = useState({});
  const [tastes, setTastes] = useState([]);
  const [garnishs, setGarnishs] = useState([]);
  const [comments, setComments] = useState([]);
  const [glasses, setGlasses] = useState("콜린스");
  const [ingredients, setIngredients] = useState([]);
  const [cocktailRecipe, setCocktailRecipe] = useState("");
  const [image, setImage] = useState({
    image_file: null,
    preview_URL: null,
  });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CocktailAppendContainerLayout>
        <CocktailAppendColumnLayout>
          <NameForm nameForm={nameForm} setNameForm={setNameForm} />
          <ImageForm image={image} setImage={setImage} />
          <IngredientForm
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <BaseSpiritAppendForm />
        </CocktailAppendColumnLayout>
        <CocktailAppendColumnLayout>
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
          <GlassesForm glasses={glasses} setGlasses={setGlasses} />
          <MultipleSelectChipForm
            title={"코멘트"}
            selectChips={comments}
            setSelectChips={setComments}
          />
          <CocktailRecipe
            cocktailRecipe={cocktailRecipe}
            setCocktailRecipe={setCocktailRecipe}
          />
        </CocktailAppendColumnLayout>
      </CocktailAppendContainerLayout>
    </QueryClientProvider>
  );
}

export default CocktailAppendFormPage;
