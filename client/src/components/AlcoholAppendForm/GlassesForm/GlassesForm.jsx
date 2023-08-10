import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";
import RadioButtons from "../../UI/RadioButton/RadioButtons/RadioButtons";

function GlassesForm({ glass, setGlass }) {
  return (
    <Outer title={"잔 모양"}>
      <RadioButtons
        radioButtonNames={["콜린스", "마니티", "온더락", "삼폐인", "숏잔"]}
        selectedValue={glass}
        setSelectedValue={setGlass}
      />
    </Outer>
  );
}

export default GlassesForm;
