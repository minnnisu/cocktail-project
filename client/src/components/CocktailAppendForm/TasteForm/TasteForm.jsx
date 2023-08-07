import Card from "../../UI/Wrapper/Card/Card";
import Title from "../../UI/Title/Title";
import Margin16 from "../../UI/Wrapper/Margin/Margin16/Margin16";
import InputSubmit from "../../UI/Input/InputSubmit/InputSubmit";
import { useState } from "react";
import MultipleSelectChips from "../../UI/MultipleSelectChip/MultipleSelectChips/MultipleSelectChips";

function TasteForm({ tastes, setTastes }) {
  const handleTasteSubmit = (taste) => {
    setTastes((prev) => [...prev, taste["맛"]]);
  };
  return (
    <Card>
      <Title size={3}>맛</Title>
      <Margin16 positions={["Top"]}>
        <MultipleSelectChips selectChips={tastes} setSelectChips={setTastes} />
      </Margin16>
      <Margin16 positions={["Top"]}>
        <InputSubmit items={["맛"]} onSubmitInputItems={handleTasteSubmit} />
      </Margin16>
    </Card>
  );
}
export default TasteForm;
