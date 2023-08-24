import DyanmicInput from "../UI/Input/DynamicInput/DynamicInput";

function SubAlcoholForm({ subAlcohols, setSubAlcohols }) {
  const inputField = [
    { title: "이름", name: "name" },
    { title: "도수", name: "abv" },
  ];
  return (
    <>
      <DyanmicInput
        headerTitle={"하위 알코올"}
        inputField={inputField}
        forms={subAlcohols}
        setForms={setSubAlcohols}
      />
    </>
  );
}

export default SubAlcoholForm;
