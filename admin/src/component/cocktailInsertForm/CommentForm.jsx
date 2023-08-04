import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CommentForm({ comments, setCocktailInfo }) {
  const [newComment, setNewComment] = useState("");

  const addNewComment = () => {
    const updatedComment = [...comments, newComment];
    setCocktailInfo((prev) => ({ ...prev, comments: updatedComment }));
  };

  const deleteNewComment = (targetIndex) => {
    const updatedComment = comments.filter(
      (item, index) => index !== targetIndex
    );
    setCocktailInfo((prev) => ({ ...prev, comments: updatedComment }));
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <Form.Group className="comments_container mb-3">
      <Form.Label className="label">코멘트</Form.Label>
      {comments.map((comment, index) => {
        return (
          <div key={index} className="d-flex">
            <div className="me-3">{comment}</div>
            <div onClick={() => deleteNewComment(index)}>x</div>
          </div>
        );
      })}
      <div className="comments_input_container d-flex">
        <Form.Control
          className="comments_input me-1"
          value={newComment}
          onChange={handleNewCommentChange}
        />
        <Button
          className="flex-shrink-0"
          variant="primary"
          type="button"
          onClick={addNewComment}
        >
          추가
        </Button>
      </div>
    </Form.Group>
  );
}

export default CommentForm;
