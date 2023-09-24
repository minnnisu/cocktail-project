import Modal from "react-bootstrap/Modal";
import styles from "./MoreTaskModal.module.css";

function MoreTaskModal({ show, handleClose, tasks, onClickTask }) {
  return (
    <Modal
      className="border-0"
      show={show}
      onHide={handleClose}
      size="sm"
      centered
    >
      <Modal.Body className="text-center p-0">
        <div className={styles.wrapper}>
          {tasks.map((task, index) => (
            <div
              className={styles.task}
              key={index}
              onClick={() => onClickTask(index)}
            >
              {task}
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MoreTaskModal;
