import { useCommentPostApi } from "../../../../hooks/usePostApi";
import { useAuthHandler } from "../../../../hooks/useAuthHandler";
import { useState } from "react";
import styles from "./CommentDetailInput.module.css";

function CommentDetailInput({ postId }) {
  const { user } = useAuthHandler();
  const [comment, setComment] = useState("");
  const commentPostMutation = useCommentPostApi(postId);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (!user) {
      alert("댓글을 작성하려면 로그인을 해야합니다.");
    }
    commentPostMutation.mutate(
      { content: comment },
      {
        onSuccess: function () {
          setComment("");
        },
      }
    );
  };
  return (
    <div className={styles.comment_input}>
      <input
        placeholder="댓글 작성"
        className={styles.input}
        value={comment}
        onChange={handleCommentChange}
      />
      <button className={styles.button} onClick={handleCommentSubmit}>
        등록
      </button>
    </div>
  );
}

export default CommentDetailInput;
