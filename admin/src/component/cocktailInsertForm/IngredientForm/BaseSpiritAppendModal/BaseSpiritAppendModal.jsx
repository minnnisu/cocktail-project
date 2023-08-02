import Modal from "react-bootstrap/Modal";
import BaseSpiritTypeSelect from "./BaseSpiritTypeSelect";
import { useState } from "react";
import BaseSpiritInput from "./BaseSpiritInput";
import BaseSpiritAppendBtn from "./BaseSpiritAppendBtn";

function BaseSpiritAppendModal({ show, setShow, setBaseSpirits }) {
  const handleClose = () => {
    setShow(false);
  };

  const [baseSpiritInfo, setBaseSpiritInfo] = useState({
    base_spirit: { en: "", ko: "" },
    base_spirit_type: "",
    alcohol: "",
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
          <BaseSpiritAppendBtn
            baseSpiritInfo={baseSpiritInfo}
            setBaseSpiritInfo={setBaseSpiritInfo}
            setBaseSpirits={setBaseSpirits}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BaseSpiritAppendModal;
