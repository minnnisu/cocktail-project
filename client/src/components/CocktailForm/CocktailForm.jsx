import Outer from "../../components/UI/Outer/Outer";
import Input from "../UI/Input/Input";
import MultipleSelectChipForm from "../CocktailForm/MultipleSelectChipForm/MultipleSelectChipForm";
import AlcoholIngredientForm from "../CocktailForm/IngredientForm/AlcoholIngredientForm";
import NonAlcoholIngredientForm from "../CocktailForm/IngredientForm/NonAlcoholIngredientForm";
import RecipeForm from "../CocktailForm/RecipeForm/RecipeForm";
import ImageForm from "../CocktailForm/ImageForm/ImageForm";
import CocktailControl from "../CocktailForm/CocktailFormControl/CocktailControl";
import { useState } from "react";

function CocktailForm() {
  const [name, setName] = useState("");
  const [tastes, setTastes] = useState([]);
  const [garnishes, setGarnishes] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [alcohols, setAlcohols] = useState([]);
  const [nonAlcohols, setNonAlcohols] = useState([]);
  const [image, setImage] = useState({
    image_file: null,
    preview_URL: null,
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const submitData = {
    name,
    tastes,
    garnishes,
    recipe,
    alcohols,
    nonAlcohols,
  };

  return (
    <Outer title={"칵테일 추가"}>
      <Input
        title={"이름"}
        name={"name"}
        value={name}
        onChangeValue={handleNameChange}
      />
      <MultipleSelectChipForm
        title={{ ko: "맛", en: "tastes" }}
        selectChips={tastes}
        setSelectChips={setTastes}
      />
      <MultipleSelectChipForm
        title={{ ko: "가니쉬", en: "garnishes" }}
        selectChips={garnishes}
        setSelectChips={setGarnishes}
      />
      <AlcoholIngredientForm forms={alcohols} setForms={setAlcohols} />
      <NonAlcoholIngredientForm forms={nonAlcohols} setForms={setNonAlcohols} />
      <RecipeForm setRecipe={setRecipe} />
      <ImageForm image={image} setImage={setImage} />
      <CocktailControl
        submitData={submitData}
        submitImageData={image.image_file}
      />
    </Outer>
  );
}

export default CocktailForm;
