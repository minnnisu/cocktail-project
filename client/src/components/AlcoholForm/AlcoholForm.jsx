import { useState } from "react";
import Outer from "../../components/UI/Outer/Outer";
import Input from "../UI/Input/Input";
import SubAlcoholForm from "./SubAlcoholForm";
import Button from "../UI/Button/Button";
import styles from "./AlcoholForm.module.css";
import { useAlcoholPostApi } from "../../hooks/useAlcoholApi";

function AlcoholForm() {
  const [name, setName] = useState("");
  const [abv, setAbv] = useState("");
  const [subAlcohols, setSubAlcohols] = useState([]);

  const mutation = useAlcoholPostApi();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAbvChange = (e) => {
    setAbv(e.target.value);
  };

  const handleInputValueSubmit = () => {
    const body = {};
    let valid = true;
    if (name === "") {
      valid = false;
      return alert("술 이름을 입력해주세요.");
    }

    if (subAlcohols.length < 1 && abv === "") {
      return alert("하위 알코올 또는 상위 알코올의 도수를 추가해주세요.");
    } else if (subAlcohols.length > 0 && abv !== "") {
      return alert(
        "하위 알코올과 상위 알코올의 도수를 둘 중 하나만 추가가능합니다."
      );
    }

    if (abv === "") {
      body.name = name;
      body.subAlcohols = subAlcohols.map((item) => {
        if (!Number(item.abv)) {
          valid = false;
          alert(
            `하위 알코올 ${item.name}의 도수가 숫자인지 다시 한번 체크해주세요.`
          );
        }

        return { ...item, abv: Number(item.abv) };
      });
    }

    if (subAlcohols.length < 1) {
      body.name = name;
      if (!Number(abv)) {
        return alert(`상위 알코올의 도수가 숫자인지 다시 한번 체크해주세요.`);
      }
      body.abv = Number(abv);
    }

    if (valid) {
      mutation.mutate(body);
    }
  };

  return (
    <Outer title={"알코올 추가"}>
      <Input
        title={"이름"}
        name={"name"}
        value={name}
        onChangeValue={handleNameChange}
      />
      <Input
        title={"도수"}
        name={"abv"}
        value={abv}
        onChangeValue={handleAbvChange}
      />
      <SubAlcoholForm
        subAlcohols={subAlcohols}
        setSubAlcohols={setSubAlcohols}
      />
      <Button onClickButton={handleInputValueSubmit}>{"등록하기"}</Button>
      <div className={styles.caution}>
        주의! 하위 알코올이 있을 경우 상위 알코올의 도수는 공란으로 둬야합니다.
      </div>
    </Outer>
  );
}

export default AlcoholForm;
