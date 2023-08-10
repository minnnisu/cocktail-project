import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";
import InputItems from "../../UI/Input/InputItems/InputItems";

function NameForm({ cocktailName, setCocktailName }) {
  return (
    <Outer title={"이름"}>
      <InputItems
        inputNames={["이름"]}
        inputValues={cocktailName}
        setInputValues={setCocktailName}
      />
    </Outer>
  );
}

export default NameForm;
