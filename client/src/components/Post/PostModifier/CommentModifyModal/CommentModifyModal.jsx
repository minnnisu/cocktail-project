import Modal from "react-bootstrap/Modal";
import Title from "../../../UI/Title/Title";
import Button from "../../../UI/Button/Button";
import styles from "./CommentModifyModal.module.css";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useCommentPatchApi } from "../../../../hooks/usePostApi";
function CommentModifyModal({ show, handleClose, postId, comment }) {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const commentMutation = useCommentPatchApi(postId, comment._id);

  console.log(postId, comment._id);

  const handleModifyCommentSubmit = () => {
    if (!user) {
      return alert("로그인 해주세요");
    } else if (user != comment.author.id) {
      return alert("수정은 댓글을 작성한 사람만 할 수 있습니다");
    }

    const body = { content: content };

    commentMutation.mutate(body, {
      onSuccess: function () {
        handleClose();
      },
    });
  };

  return (
    <Modal
      className="border-0"
      show={show}
      onHide={handleClose}
      size="lg"
      centered
    >
      <Modal.Header className="border-0 pb-0">
        <Title size={5}>댓글 수정</Title>
      </Modal.Header>
      <Modal.Body className="pb-0">
        <input
          name="title"
          className={styles.input}
          value={content}
          onChange={handleContentChange}
        />
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button backgroundColor="red" onClickButton={handleClose}>
          닫기
        </Button>
        <Button onClickButton={handleModifyCommentSubmit}>수정하기</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CommentModifyModal;
