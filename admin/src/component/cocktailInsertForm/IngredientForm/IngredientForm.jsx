import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import BaseSpiritAppendModal from "./BaseSpiritAppendModal/BaseSpiritAppendModal";
const domain = require("../../../config/domain");

function IngredientForm({ ingredients, setCocktailInfo }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [newIngredient, setNewIngredient] = useState({
    base_spirit_name: "",
    volume: "",
  });

  const [baseSpirits, setBaseSpirits] = useState({
    state: "loading",
    value: [],
  }); // state - loading, sucesss, fail

  useEffect(() => {
    const fetchBaseSpirits = async () => {
      try {
        const response = await axios.get(`${domain.url}/base-spirit`);
        setBaseSpirits({ status: "success", value: response.data });
      } catch (error) {
        setBaseSpirits((prev) => ({ ...prev, status: "fail" }));
      }
    };

    fetchBaseSpirits();
  }, [baseSpirits.value.length]);

  const addNewIngredient = () => {
    if (newIngredient.base_spirit_name === "") {
      alert("술을 선택해주세요.");
      return;
    }

    if (newIngredient.volume === "") {
      alert("용량을 입력해주세요.");
      return;
    }
    const updatedIngredients = [...ingredients, newIngredient];
    setCocktailInfo((prev) => ({ ...prev, ingredients: updatedIngredients }));
  };

  const deleteTaste = (targetIndex) => {
    const updatedIngredient = ingredients.filter(
      (_, index) => index !== targetIndex
    );
    setCocktailInfo((prev) => ({ ...prev, ingredients: updatedIngredient }));
  };

  const handleNewIngredientChange = (e) => {
    setNewIngredient((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <BaseSpiritAppendModal
        show={show}
        setShow={setShow}
        setBaseSpirits={setBaseSpirits}
      />
      <Form.Group className="mb-3">
        <div className="ingredient_form_header d-flex justify-content-between">
          <Form.Label className="label">재료 및 용량</Form.Label>
          <Button variant="primary" type="button" onClick={handleShow}>
            추가
          </Button>
        </div>
        <div>
          {baseSpirits.state === "fail" ? (
            <div>오류로 인해 데이터를 불러오는데 실패하였습니다.</div>
          ) : (
            <>
              <div className="ingredient_container mb-3 d-flex">
                {baseSpirits.value.map((baseSpirit, index) => (
                  <Form.Check
                    key={index}
                    className="me-3 flex-shrink-0"
                    type="radio"
                    name="base_spirit_name"
                    label={baseSpirit.name}
                    value={baseSpirit.name}
                    onChange={handleNewIngredientChange}
                  />
                ))}
              </div>
              <div className="d-flex">
                <Form.Label className="flex-shrink-0 me-1">용량</Form.Label>
                <Form.Control
                  name="volume"
                  className="me-1"
                  style={{ width: "5em" }}
                  onChange={handleNewIngredientChange}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={addNewIngredient}
                >
                  추가
                </Button>
              </div>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="d-flex">
                  <div className="me-3">{ingredient.base_spirit_name}</div>
                  <div className="me-3">{ingredient.volume}</div>
                  <div onClick={() => deleteTaste(index)}>x</div>
                </div>
              ))}
            </>
          )}
        </div>
      </Form.Group>
    </>
  );
}

export default IngredientForm;
