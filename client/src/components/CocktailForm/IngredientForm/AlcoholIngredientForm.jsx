import DyanmicInput from "../../UI/Input/DynamicInput/DynamicInput";

function AlcoholIngredientForm({ forms, setForms }) {
  const inputField = [
    { title: "이름", name: "name" },
    { title: "하위 알코올", name: "subAlcoholName" },
    { title: "용량", name: "volume" },
    { title: "단위", name: "unit" },
  ];
  return (
    <DyanmicInput
      headerTitle={"알코올"}
      inputField={inputField}
      forms={forms}
      setForms={setForms}
    />
  );
}

export default AlcoholIngredientForm;
