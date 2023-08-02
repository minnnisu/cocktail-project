import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BaseSpiritTypeSelect from "./BaseSpiritTypeSelect";
import { useState } from "react";
import BaseSpiritInput from "./BaseSpiritInput";

function BaseSpiritAppendModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [baseSpiritInfo, setBaseSpiritInfo] = useState({
    base_spirit: { en: "", ko: "" },
    base_spirit_type: "",
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>술 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BaseSpiritTypeSelect setBaseSpiritInfo={setBaseSpiritInfo} />
          <BaseSpiritInput setBaseSpiritInfo={setBaseSpiritInfo} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BaseSpiritAppendModal;
