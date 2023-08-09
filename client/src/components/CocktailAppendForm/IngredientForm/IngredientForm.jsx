import { useState } from "react";
import Outer from "../../../layouts/CocktailAppendForm/Outer";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";
import Inner from "../../../layouts/CocktailAppendForm/Inner";
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
          />
        )}
      </Inner>
    </Outer>
  );
}

export default IngredientForm;
