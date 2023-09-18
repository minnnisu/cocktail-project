import { useParams } from "react-router-dom";
import { useCommentPostApi } from "../../../../hooks/usePostApi";
import { useAuthHandler } from "../../../../hooks/useAuthHandler";
import { useState } from "react";

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
    <div>
      <textarea value={comment} onChange={handleCommentChange} />
      <button onClick={handleCommentSubmit}>댓글 등록</button>
    </div>
  );
}

export default CommentDetailInput;
