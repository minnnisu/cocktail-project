import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import BaseSpiritAppendModal from "./BaseSpiritAppendModal/BaseSpiritAppendModal";

function IngredientForm({ ingredients, setCocktailInfo }) {
  const [baseSpirits, setBaseSpirits] = useState({
    state: "loading",
    value: [],
  }); // state - loading, sucesss, fail
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchBaseSpirits = async () => {
      try {
        const response = await axios.get("http://localhost:8080/base-spirit");
        setBaseSpirits({ status: "success", value: response.data });
      } catch (error) {
        setBaseSpirits((prev) => ({ ...prev, status: "fail" }));
      }
    };
    fetchBaseSpirits();
  }, []);

  const handleShow = () => setShow(true);

  return (
    <>
      <BaseSpiritAppendModal show={show} setShow={setShow} />
      <Form.Group className="mb-3">
        <div className="ingredient_form_header d-flex justify-content-between">
          <Form.Label className="label">재료 및 용량</Form.Label>
          <Button variant="primary" type="button" onClick={handleShow}>
            추가
          </Button>
        </div>
        {baseSpirits.value.map((baseSpirit, index) => (
          <div key={index} className="mb-3">
            <Form.Check
              className="me-3"
              type="radio"
              name="radioGroup"
              label={baseSpirit.name.ko}
              value={baseSpirit.name.ko}
            />
          </div>
        ))}
      </Form.Group>
    </>
  );
}

export default IngredientForm;
