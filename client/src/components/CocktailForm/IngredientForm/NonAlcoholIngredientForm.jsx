import DyanmicInput from "../../UI/Input/DynamicInput/DynamicInput";

function NonAlcoholIngredientForm({ forms, setForms }) {
  const inputField = [
    { title: "이름", name: "name" },
    { title: "용량", name: "volume" },
    { title: "단위", name: "unit" },
  ];
  return (
    <DyanmicInput
      headerTitle={"기타재료"}
      inputField={inputField}
      forms={forms}
      setForms={setForms}
    />
  );
}

export default NonAlcoholIngredientForm;
