import Card from "../../UI/Wrapper/Card/Card";
import InputItems from "../../UI/Input/InputItems/InputItems";
import Title from "../../UI/Title/Title";
import Margin16 from "../../UI/Wrapper/Margin/Margin16/Margin16";

function NameForm({ nameForm, setNameForm }) {
  return (
    <Card>
      <Title size={3}>이름</Title>
      <Margin16 positions={["Top"]}>
        <InputItems
          items={["한글", "영어"]}
          inputItemsResult={nameForm}
          setInputItemsResult={setNameForm}
        />
      </Margin16>
    </Card>
  );
}

export default NameForm;
