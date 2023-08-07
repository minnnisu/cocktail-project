import Form from "react-bootstrap/Form";

function NameForm({ setCocktailInfo }) {
  const handleNameChange = (e) => {
    setCocktailInfo((prev) => ({ ...prev, name: e.target.value }));
  };

  return (
    <Form.Group className="cocktail_name_container mb-3">
      <div className="d-flex">
        <div className="cocktail_name_ko me-3">
          <Form.Label className="label">칵테일 이름</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            name="name"
            placeholder="모히토"
          />
        </div>
      </div>
    </Form.Group>
  );
}

export default NameForm;
