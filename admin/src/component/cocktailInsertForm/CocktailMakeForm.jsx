import Form from "react-bootstrap/Form";

function CocktailMakeForm({ setCocktailInfo }) {
  const handleCocktailMakeChange = (e) => {
    setCocktailInfo((prev) => ({ ...prev, cocktailMake: e.target.value }));
  };
  return (
    <Form.Group className="cocktail_make_container mb-3">
      <Form.Label className="label">조주 기법</Form.Label>
      <Form.Control
        name="make"
        onChange={handleCocktailMakeChange}
        as="textarea"
        placeholder="1. 롱드링크 글라스에 얼음을 채워넣는다."
        style={{ height: "100px" }}
      />
    </Form.Group>
  );
}

export default CocktailMakeForm;
