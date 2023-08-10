import InputSubmit from "../../UI/Input/InputSubmit/InputSubmit";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";
import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";

function MultipleSelectChipForm({ title, selectChips, setSelectChips }) {
  const handleInputItemsSubmit = (selectChips) => {
    setSelectChips((prev) => [...prev, selectChips[title]]);
  };
  return (
    <Outer title={title}>
      {selectChips.length > 0 && (
        <MultipleSelectChips
          selectChips={selectChips}
          setSelectChips={setSelectChips}
        />
      )}
      <InputSubmit
        items={[title]}
        onSubmitInputItems={handleInputItemsSubmit}
        buttonName={"추가"}
      />
    </Outer>
  );
}

export default MultipleSelectChipForm;
