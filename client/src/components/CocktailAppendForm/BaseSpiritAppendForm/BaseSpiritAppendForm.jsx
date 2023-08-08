import { useState } from "react";
import Inner from "../../../layouts/CocktailAppendForm/Inner";
import Outer from "../../../layouts/CocktailAppendForm/Outer";
import InputSubmit from "../../UI/Input/InputSubmit/InputSubmit";
import RadioButtons from "../../UI/RadioButton/RadioButtons/RadioButtons";

function BaseSpiritAppendForm() {
  const [baseSpiritTypeNames, setBaseSpiritTypeNames] = useState([
    "위스키",
    "럼",
    "진",
  ]); // 수정 필요
  const [selectedBaseSpiritType, setSelectedBaseSpiritType] = useState(
    baseSpiritTypeNames[0]
  );

  const handleBaseSpiritTypeSumbit = (value) => {
    console.log(value);
  };

  const handleBaseSpiritSumbit = (value) => {
    console.log(selectedBaseSpiritType, value);
  };

  return (
    <Outer title={"재료 추가"}>
      <Inner title={"기주 추가"}>
        <InputSubmit
          items={["이름"]}
          onSubmitInputItems={handleBaseSpiritTypeSumbit}
        />
      </Inner>
      <Inner title={"술 추가"}>
        <RadioButtons
          radioButtonNames={baseSpiritTypeNames}
          selectedValue={selectedBaseSpiritType}
          setSelectedValue={setSelectedBaseSpiritType}
        />
        <InputSubmit
          items={["이름", "알코올"]}
          onSubmitInputItems={handleBaseSpiritSumbit}
        />
      </Inner>
    </Outer>
  );
}

export default BaseSpiritAppendForm;
