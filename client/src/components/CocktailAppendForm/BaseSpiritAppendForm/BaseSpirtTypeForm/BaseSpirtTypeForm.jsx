import { useBaseSpiritTypePostApi } from "../../../../hooks/useBaseSpiritTypeApi";
import Inner from "../../../../layouts/CocktailAppendForm/Inner";
import InputSubmit from "../../../UI/Input/InputSubmit/InputSubmit";

function BaseSpirtTypeForm() {
  const mutation = useBaseSpiritTypePostApi();

  const handleBaseSpiritTypeSumbit = (value) => {
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
      />
    </Inner>
  );
}

export default BaseSpirtTypeForm;
