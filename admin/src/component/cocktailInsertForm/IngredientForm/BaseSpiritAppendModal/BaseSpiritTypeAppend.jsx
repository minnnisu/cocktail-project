import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BaseSpiritTypeAppend() {
  const [newBaseSpiritType, setNewBaseSpiritType] = useState({
    en: "",
    ko: "",
  });

  const submitNewBaseSpiritType = async () => {
    const result = await axios.post("http://localhost:8080/base-spirit-type", {
      name: newBaseSpiritType,
      base_spirit: [],
    });
    if (result.status === 201) {
      alert("등록이 성공적으로 완료되었습니다.");
      setNewBaseSpiritType({
        en: "",
        ko: "",
      });
    } else {
      alert("등록에 실패하였습니다.");
    }
  };

  const changeNewBaseSpiritType = (e) => {
    setNewBaseSpiritType({
      ...newBaseSpiritType,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="new_base_spirit_append_container d-flex mb-3">
      <div className="wrapper me-1">
        <Form.Label className="label">기주 이름 - 영문</Form.Label>
        <Form.Control
          className="me-1"
          name="en"
          onChange={changeNewBaseSpiritType}
        />
      </div>
      <div className="wrapper me-1">
        <Form.Label className="label">기주 선택 - 한글</Form.Label>
        <Form.Control
          className="me-1"
          name="ko"
          onChange={changeNewBaseSpiritType}
        />
      </div>
      <Button
        variant="primary"
        type="button"
        className="flex-shrink-0"
        onClick={submitNewBaseSpiritType}
      >
        추가
      </Button>
    </div>
  );
}

export default BaseSpiritTypeAppend;
