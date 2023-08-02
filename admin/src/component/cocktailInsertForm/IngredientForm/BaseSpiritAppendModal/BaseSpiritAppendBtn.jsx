import Button from "react-bootstrap/Button";
import axios from "axios";

// base_spirit: { en: "", ko: "" },
//     base_spirit_type: "",

function BaseSpiritAppendBtn({
  baseSpiritInfo,
  setBaseSpiritInfo,
  setBaseSpirits,
}) {
  const submitNewBaseSpirit = async () => {
    if (baseSpiritInfo.base_spirit.en === "") {
      alert("술의 영어이름을 입력해주세요.");
      return;
    }

    if (baseSpiritInfo.base_spirit.ko === "") {
      alert("술의 한글이름을 입력해주세요.");
      return;
    }

    if (baseSpiritInfo.base_spirit_type === "") {
      alert("기주를 선택해주세요.");
      return;
    }

    if (baseSpiritInfo.alcohol === "") {
      alert("도수를 입력해주세요.");
      return;
    }

    try {
      const result = await axios.post("http://localhost:8080/base-spirit", {
        name: baseSpiritInfo.base_spirit,
        type: baseSpiritInfo.base_spirit_type,
        alcohol: baseSpiritInfo.alcohol,
        cocktails: [],
      });
      if (result.status === 201) {
        alert("등록이 성공적으로 완료되었습니다.");

        setBaseSpiritInfo({
          base_spirit: { en: "", ko: "" },
          base_spirit_type: "",
          alcohol: "",
        });
        setBaseSpirits({
          state: "loading",
          value: [],
        });
      }
    } catch (error) {
      alert("등록에 실패하였습니다.");
    }
  };

  return (
    <Button variant="primary" type="button" onClick={submitNewBaseSpirit}>
      등록
    </Button>
  );
}

export default BaseSpiritAppendBtn;
