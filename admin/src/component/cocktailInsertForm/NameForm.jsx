import Form from "react-bootstrap/Form";

function NameForm({ setCocktailInfo }) {
  const handleNameChange = (e) => {
    setCocktailInfo((prev) => {
      const prevValue = prev.name;
      const updatedValue = {
        ...prevValue,
        [e.target.name]: e.target.value,
      };

      return { ...prev, name: updatedValue };
    });
  };

  return (
    <Form.Group className="cocktail_name_container mb-3">
      <div className="d-flex">
        <div className="cocktail_name_ko me-3">
          <Form.Label className="label">칵테일 이름-한글</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            name="ko"
            placeholder="모히토"
          />
        </div>
        <div className="cocktail_name_en">
          <Form.Label className="label">칵테일 이름-영문</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            name="en"
            placeholder="Mojito"
          />
        </div>
      </div>
    </Form.Group>
  );
}

export default NameForm;
