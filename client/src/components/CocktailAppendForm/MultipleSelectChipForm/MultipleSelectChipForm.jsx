import Card from "../../UI/Wrapper/Card/Card";
import Title from "../../UI/Title/Title";
import Margin16 from "../../UI/Wrapper/Margin/Margin16/Margin16";
import InputSubmit from "../../UI/Input/InputSubmit/InputSubmit";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";
import Outer from "../../../layouts/CocktailAppendForm/Outer";

function MultipleSelectChipForm({ title, selectChips, setSelectChips }) {
  const handleInputItemsSubmit = (selectChips) => {
    setSelectChips((prev) => [...prev, selectChips[title]]);
  };
  return (
    <Outer title={title}>
      <MultipleSelectChips
        selectChips={selectChips}
        setSelectChips={setSelectChips}
      />
      <InputSubmit
        items={[title]}
        onSubmitInputItems={handleInputItemsSubmit}
      />
    </Outer>
  );
}

export default MultipleSelectChipForm;
