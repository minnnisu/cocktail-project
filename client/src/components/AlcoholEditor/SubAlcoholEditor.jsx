import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import SubAlcoholForm from "../AlcoholForm/SubAlcoholForm";
import { useAlcoholPutApi } from "../../hooks/useAlcoholApi";

function SubAlcoholEditor({ show, setShow, id }) {
  const [subAlcohols, setSubAlcohols] = useState([]);

  const mutation = useAlcoholPutApi();

  const handleClose = () => setShow(false);

  const handleInputValueSubmit = () => {
    let valid = true;
    const body = { filter: { id: id }, update: {} };

    body.update.subAlcohols = subAlcohols.map((item) => {
      if (!Number(item.abv)) {
        valid = false;
        alert(
          `하위 알코올 ${item.name}의 도수가 숫자인지 다시 한번 체크해주세요.`
        );
      }

      return { ...item, abv: Number(item.abv) };
    });

    if (valid) {
      mutation.mutate(body);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>하위 알코올 수정</Modal.Title>
      </Modal.Header>
      <Modal.Body data-bs-theme="dark">
        <SubAlcoholForm
          subAlcohols={subAlcohols}
          setSubAlcohols={setSubAlcohols}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClickButton={handleClose}>Close</Button>
        <Button onClickButton={handleInputValueSubmit}>{"등록하기"}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SubAlcoholEditor;
