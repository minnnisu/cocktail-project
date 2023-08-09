import { useBaseSpiritTypePostApi } from "../../../../hooks/useBaseSpiritTypeApi";
import Inner from "../../../../layouts/CocktailAppendForm/Inner";
import InputSubmit from "../../../UI/Input/InputSubmit/InputSubmit";

function BaseSpirtTypeForm() {
  const mutation = useBaseSpiritTypePostApi();

  const handleBaseSpiritTypeSumbit = (value) => {
    if (!value["이름"] || value["이름"] === "") {
      return alert("이름을 입력하세요.");
    }

    const body = {
      name: value["이름"],
      base_spirit: [],
    };

    mutation.mutate(body);
  };

  return (
    <Inner title={"기주 추가"}>
      <InputSubmit
        items={["이름"]}
        onSubmitInputItems={handleBaseSpiritTypeSumbit}
        buttonName={"추가"}
      />
    </Inner>
  );
}

export default BaseSpirtTypeForm;
