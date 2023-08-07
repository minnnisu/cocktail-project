import Form from "react-bootstrap/Form";

function BaseSpiritInput({ setBaseSpiritInfo }) {
  const handleBaseSpiritChange = (e) => {
    setBaseSpiritInfo((prev) => ({ ...prev, base_spirit: e.target.value }));
  };

  const handleAlcoholChange = (e) => {
    setBaseSpiritInfo((prev) => ({ ...prev, alcohol: e.target.value }));
  };

  return (
    <Form.Group>
      <div className="new_base_spirit_append_container d-flex mb-3">
        <div className="wrapper me-1">
          <Form.Label className="label">술 이름 입력</Form.Label>
          <Form.Control name="base_spirit" onChange={handleBaseSpiritChange} />
        </div>
      </div>
      <Form.Label className="label">도수</Form.Label>
      <Form.Control name="alcohol" onChange={handleAlcoholChange} />
    </Form.Group>
  );
}

export default BaseSpiritInput;
