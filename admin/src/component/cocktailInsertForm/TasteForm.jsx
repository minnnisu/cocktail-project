import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TasteForm({ tastes, setCocktailInfo }) {
  const [tasteInput, setTasteInput] = useState("");

  const addNewTaste = () => {
    const updatedTaste = [...tastes, tasteInput];
    setCocktailInfo((prev) => ({ ...prev, tastes: updatedTaste }));
  };

  const deleteTaste = (targetIndex) => {
    const updatedTaste = tastes.filter((item, index) => index !== targetIndex);
    setCocktailInfo((prev) => ({ ...prev, tastes: updatedTaste }));
  };

  const tasteFields = tastes.map((taste, index) => {
    return (
      <div className="d-flex">
        <div key={index} className="me-3">
          {taste}
        </div>
        <div onClick={() => deleteTaste(index)}>x</div>
      </div>
    );
  });

  return (
    <Form.Group className="taste_container mb-3">
      <Form.Label className="label">맛</Form.Label>
      <div className="taste_field_container">{tasteFields}</div>
      <div className="taste_input_container d-flex">
        <Form.Control
          className="taste_input me-1"
          value={tasteInput}
          onChange={(e) => setTasteInput(e.target.value)}
        />
        <Button
          className="flex-shrink-0"
          variant="primary"
          type="button"
          onClick={addNewTaste}
        >
          추가
        </Button>
      </div>
    </Form.Group>
  );
}

export default TasteForm;
