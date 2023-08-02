import Form from "react-bootstrap/Form";

function ImageForm({ setCocktailInfo }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="label">칵테일 사진</Form.Label>
      <Form.Control type="file" />
    </Form.Group>
  );
}

export default ImageForm;
