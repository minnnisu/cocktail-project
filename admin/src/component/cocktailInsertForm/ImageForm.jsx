import axios from "axios";
import Form from "react-bootstrap/Form";

function ImageForm({ setSelectedImage }) {
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label className="label">칵테일 사진</Form.Label>
      <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
    </Form.Group>
  );
}

export default ImageForm;
