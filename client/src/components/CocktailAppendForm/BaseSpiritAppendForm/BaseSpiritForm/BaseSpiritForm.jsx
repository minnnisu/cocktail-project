import InputSubmit from "../../../UI/Input/InputSubmit/InputSubmit";
import RadioButtons from "../../../UI/RadioButton/RadioButtons/RadioButtons";
import Inner from "../../../../layouts/CocktailAppendForm/Inner";

import { useBaseSpiritTypeGetApi } from "../../../../hooks/useBaseSpiritTypeApi";
import { useState } from "react";
import { useBaseSpiritPostApi } from "../../../../hooks/useBaseSpiritApi";

function BaseSpirtForm() {
  const [selectedBaseSpiritType, setSelectedBaseSpiritType] = useState(null);

  const { isLoading, isSuccess, isError, data, _ } = useBaseSpiritTypeGetApi();

  if (isSuccess) {
    if (selectedBaseSpiritType === null) {
      setSelectedBaseSpiritType(data[0]);
    }
  }

  const mutation = useBaseSpiritPostApi();

  const handleBaseSpiritSumbit = (value) => {
    if (!value["이름"] || value["이름"] === "") {
      return alert("이름을 입력하세요.");
    }

    if (!value["알코올"] || value["알코올"] === "") {
      return alert("알코올을 입력하세요.");
    }

    const body = {
      name: value["이름"],
      base_spirit_type: selectedBaseSpiritType,
      alcohol: value["알코올"],
      cocktails: [],
    };

    mutation.mutate(body);
  };

  return (
    <Inner title={"술 추가"}>
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
      {isError && <div>데이터를 불러오는 과정에서 에러가 발생하였습니다.</div>}
      {data && (
        <RadioButtons
          radioButtonNames={data}
          selectedValue={selectedBaseSpiritType}
          setSelectedValue={setSelectedBaseSpiritType}
        />
      )}
      {data && (
        <InputSubmit
          items={["이름", "알코올"]}
          onSubmitInputItems={handleBaseSpiritSumbit}
          buttonName={"추가"}
        />
      )}
    </Inner>
  );
}

export default BaseSpirtForm;
