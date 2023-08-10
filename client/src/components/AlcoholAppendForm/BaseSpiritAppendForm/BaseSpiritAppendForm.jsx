import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";
import BaseSpirtTypeForm from "./BaseSpirtTypeForm/BaseSpirtTypeForm";
import BaseSpirtForm from "./BaseSpiritForm/BaseSpiritForm";

function BaseSpiritAppendForm() {
  return (
    <Outer title={"재료 추가"}>
      <BaseSpirtTypeForm />
      <BaseSpirtForm />
    </Outer>
  );
}

export default BaseSpiritAppendForm;
