import { useState } from "react";
import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";
import Inner from "../../../layouts/AlcoholAppendFormLayout/Inner";
import RadioButtons from "../../UI/RadioButton/RadioButtons/RadioButtons";
import InputSubmit from "../../UI/Input/InputSubmit/InputSubmit";
import useApiGetQuery from "../../../hooks/useApiGetQuery";
import { useBaseSpiritGetApi } from "../../../hooks/useBaseSpiritApi";

function IngredientForm({ ingredients, setIngredients }) {
  const [selectedBaseSpirit, setSelectedBaseSpirit] = useState(null);

  const { isLoading, isSuccess, isError, data, _ } = useBaseSpiritGetApi();

  if (isSuccess) {
    if (selectedBaseSpirit === null) {
      setSelectedBaseSpirit(data[0]);
    }
  }

  const handleVolume = (volume) => {
    if (volume === "f") return "Full up";
    else return "ml";
  };

  const ingredientsChips = ingredients.map((ingredient, index) => {
    const unit = handleVolume(ingredient.volume);
    return `${ingredient.base_spirit_name} ${
      unit === "ml" ? ingredient.volume : ""
    }${unit}`;
  });

  const handleInputItemsSubmit = (value) => {
    setIngredients((prev) => [
      ...prev,
      { base_spirit_name: selectedBaseSpirit, volume: value["용량"] },
    ]);
  };

  return (
    <Outer title={"재료 및 용량"}>
      {ingredients.length > 0 && (
        <MultipleSelectChips
          selectChips={ingredientsChips}
          setSelectChips={setIngredients}
        />
      )}
      <Inner title={"술 목록"}>
        {isLoading && <div>데이터를 불러오는 중입니다.</div>}
        {isError && (
          <div>데이터를 불러오는 과정에서 에러가 발생하였습니다.</div>
        )}
        {data && (
          <RadioButtons
            radioButtonNames={data}
            selectedValue={selectedBaseSpirit}
            setSelectedValue={setSelectedBaseSpirit}
          />
        )}
        {data && (
          <InputSubmit
            items={["용량"]}
            onSubmitInputItems={handleInputItemsSubmit}
            buttonName={"추가"}
          />
        )}
      </Inner>
    </Outer>
  );
}

export default IngredientForm;
