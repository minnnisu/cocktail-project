import Outer from "../../../layouts/CocktailAppendForm/Outer";
import InputItems from "../../UI/Input/InputItems/InputItems";

function NameForm({ nameForm, setNameForm }) {
  return (
    <Outer title={"이름"}>
      <InputItems
        inputNames={["이름"]}
        inputValues={nameForm}
        setInputValues={setNameForm}
      />
    </Outer>
  );
}

export default NameForm;
