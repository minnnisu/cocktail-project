import { useState } from "react";
import Outer from "../../../layouts/CocktailAppendForm/Outer";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";
import Inner from "../../../layouts/CocktailAppendForm/Inner";
import RadioButtons from "../../UI/RadioButton/RadioButtons/RadioButtons";
import InputSubmit from "../../UI/Input/InputSubmit/InputSubmit";

function IngredientForm({ ingredients, setIngredients }) {
  const [baseSpiritNames, setBaseSpiritNames] = useState([
    "버건 위스키",
    "화이트 럼",
    "진",
  ]); // 수정 필요
  const [selectedBaseSpirit, setSelectedBaseSpirit] = useState(
    baseSpiritNames[0]
  );

  const handleVolume = (volume) => {
    if (volume === "f") return "Full up";
    else return "ml";
  };

  const handleInputItemsSubmit = (value) => {
    const volume = handleVolume(value["용량"]);

    setIngredients((prev) => [
      ...prev,
      `${selectedBaseSpirit} ${volume === "ml" ? value["용량"] : ""}${volume}`,
    ]);
  };

  return (
    <Outer title={"재료 및 용량"}>
      {ingredients.length > 0 && (
        <MultipleSelectChips
          selectChips={ingredients}
          setSelectChips={setIngredients}
        />
      )}
      <Inner title={"술 목록"}>
        <RadioButtons
          radioButtonNames={baseSpiritNames}
          selectedValue={selectedBaseSpirit}
          setSelectedValue={setSelectedBaseSpirit}
        />
        <InputSubmit
          items={["용량"]}
          onSubmitInputItems={handleInputItemsSubmit}
        />
      </Inner>
    </Outer>
  );
}

export default IngredientForm;
