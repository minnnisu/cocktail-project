import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Garnish({ garnishs, setCocktailInfo }) {
  const [newGarnish, setNewGarnish] = useState("");

  const addNewGarnish = () => {
    const updatedTaste = [...garnishs, newGarnish];
    setCocktailInfo((prev) => ({ ...prev, garnishs: updatedTaste }));
  };

  const deleteNewGarnish = (targetIndex) => {
    const updatedTaste = garnishs.filter(
      (item, index) => index !== targetIndex
    );
    setCocktailInfo((prev) => ({ ...prev, garnishs: updatedTaste }));
  };

  const handleNewGarnishChange = (e) => {
    setNewGarnish(e.target.value);
  };

  return (
    <Form.Group className="garnish_container mb-3">
      <Form.Label className="label">가니쉬</Form.Label>
      {garnishs.map((garnish, index) => (
        <div key={index} className="d-flex">
          <div className="me-3">{garnish}</div>
          <div onClick={() => deleteNewGarnish(index)}>x</div>
        </div>
      ))}
      <div className="d-flex">
        <div className="garnish_ko me-3">
          <Form.Control
            onChange={handleNewGarnishChange}
            name="garnish"
            placeholder="파인애플"
          />
        </div>
        <Button
          className="flex-shrink-0"
          variant="primary"
          type="button"
          onClick={addNewGarnish}
        >
          추가
        </Button>
      </div>
    </Form.Group>
  );
}

export default Garnish;
