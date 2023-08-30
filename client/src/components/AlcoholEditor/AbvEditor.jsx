import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Input from "../UI/Input/Input";
import { useAlcoholPutApi } from "../../hooks/useAlcoholApi";

function AbvEditor({ show, setShow, id }) {
  const [abv, setAbv] = useState("");

  const handleClose = () => setShow(false);

  const mutation = useAlcoholPutApi();

  const handleAbvChange = (e) => {
    setAbv(e.target.value);
  };

  const handleInputValueSubmit = () => {
    if (!Number(abv)) {
      return alert(`도수가 숫자인지 다시 한번 체크해주세요.`);
    }

    const body = { filter: { id }, update: { abv: Number(abv) } };

    mutation.mutate(body);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body data-bs-theme="dark">
        <Input
          title={"도수"}
          name={"abv"}
          value={abv}
          onChangeValue={handleAbvChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClickButton={handleClose}>Close</Button>
        <Button onClickButton={handleInputValueSubmit}>{"등록하기"}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AbvEditor;
