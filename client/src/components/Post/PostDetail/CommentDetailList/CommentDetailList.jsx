import CommentDetailItem from "../CommentDetailItem/CommentDetailItem";

function CommentDetailList({ comments }) {
  return (
    <div>
      {comments &&
        comments.length > 0 &&
        comments.map((comment, index) => (
          <CommentDetailItem key={index} comment={comment} />
        ))}
    </div>
  );
}

export default CommentDetailList;
