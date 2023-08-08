import Outer from "../../../layouts/CocktailAppendForm/Outer";
import RadioButtons from "../../UI/RadioButton/RadioButtons/RadioButtons";

function GlassesForm({ glasses, setGlasses }) {
  return (
    <Outer title={"잔 모양"}>
      <RadioButtons
        radioButtonNames={["콜린스", "마니티", "온더락", "삼폐인", "숏잔"]}
        selectedValue={glasses}
        setSelectedValue={setGlasses}
      />
    </Outer>
  );
}

export default GlassesForm;
