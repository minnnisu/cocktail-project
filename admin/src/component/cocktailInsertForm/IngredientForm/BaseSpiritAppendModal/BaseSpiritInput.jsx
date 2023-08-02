import Form from "react-bootstrap/Form";

function BaseSpiritInput({ setBaseSpiritInfo }) {
  const changeBaseSpirit = (e) => {
    setBaseSpiritInfo((prev) => {
      const prevBaseSpirit = prev.base_spirit;
      const updatedBaseSpirit = {
        ...prevBaseSpirit,
        [e.target.name]: e.target.value,
      };

      return { ...prev, base_spirit: updatedBaseSpirit };
    });
  };

  const changeAlcohol = (e) => {
    setBaseSpiritInfo((prev) => ({ ...prev, alcohol: e.target.value }));
  };

  return (
    <Form.Group>
      <Form.Label className="label">술 이름 입력</Form.Label>
      <div className="new_base_spirit_append_container d-flex mb-3">
        <div className="wrapper me-1">
          <Form.Label className="label">술 이름 - 영문</Form.Label>
          <Form.Control name="en" onChange={changeBaseSpirit} />
        </div>
        <div className="wrapper me-1">
          <Form.Label className="label">술 선택 - 한글</Form.Label>
          <Form.Control name="ko" onChange={changeBaseSpirit} />
        </div>
      </div>
      <Form.Label className="label">도수</Form.Label>
      <Form.Control name="alcohol" onChange={changeAlcohol} />
    </Form.Group>
  );
}

export default BaseSpiritInput;
