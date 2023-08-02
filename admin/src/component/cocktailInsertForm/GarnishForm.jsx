import Form from "react-bootstrap/Form";

function Garnish({ setCocktailInfo }) {
  const changeGarnish = (e) => {
    setCocktailInfo((prev) => {
      const prevValue = prev.name;
      const updatedValue = {
        ...prevValue,
        [e.target.name]: e.target.value,
      };

      return { ...prev, garnish: updatedValue };
    });
  };

  return (
    <Form.Group className="garnish_container mb-3">
      <div className="d-flex">
        <div className="garnish_ko me-3">
          <Form.Label className="label">가니쉬 이름-한글</Form.Label>
          <Form.Control
            onChange={changeGarnish}
            name="ko"
            placeholder="파인애플"
          />
        </div>
        <div className="garnish_en">
          <Form.Label className="label">가니쉬 이름-영문</Form.Label>
          <Form.Control
            onChange={changeGarnish}
            name="en"
            placeholder="pineapple"
          />
        </div>
      </div>
    </Form.Group>
  );
}

export default Garnish;
