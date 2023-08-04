import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BaseSpiritTypeAppend({ baseSpiritTypes, setBaseSpiritTypes }) {
  const [newBaseSpiritType, setNewBaseSpiritType] = useState({
    en: "",
    ko: "",
  });

  const submitNewBaseSpiritType = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8080/base-spirit-type",
        {
          name: newBaseSpiritType,
          base_spirit: [],
        }
      );
      if (result.status === 201) {
        alert("등록이 성공적으로 완료되었습니다.");
        setNewBaseSpiritType({
          en: "",
          ko: "",
        });
        setBaseSpiritTypes({
          state: "loading",
          value: [],
        });
      }
    } catch (error) {
      alert("등록을 실패하였습니다.");
    }
  };

  const handleNewBaseSpiritTypeChange = (e) => {
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
          onChange={handleNewBaseSpiritTypeChange}
        />
      </div>
      <div className="wrapper me-1">
        <Form.Label className="label">기주 선택 - 한글</Form.Label>
        <Form.Control
          className="me-1"
          name="ko"
          onChange={handleNewBaseSpiritTypeChange}
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
