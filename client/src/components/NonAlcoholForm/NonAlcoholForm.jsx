import { useState } from "react";
import Outer from "../../layouts/AlcoholAppendFormLayout/Outer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useNonAlcoholPostApi } from "../../hooks/useNonAlcoholApi";

function NonAlcoholForm() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const mutation = useNonAlcoholPostApi();

  const handleInputValueSubmit = () => {
    if (name === "") {
      return alert("기타 재료의 이름을 입력해주세요.");
    }
    const body = { name: name };

    mutation.mutate(body);
  };

  return (
    <Outer title={"기타재료 추가"}>
      <Input
        title={"이름"}
        name={"name"}
        value={name}
        onChangeValue={handleNameChange}
      />
      <Button onClickButton={handleInputValueSubmit}>등록하기</Button>
    </Outer>
  );
}

export default NonAlcoholForm;
