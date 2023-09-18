function CommentDetailItem({ comment }) {
  return (
    <div>
      <div>{comment.author.nickname}</div>
      <div>{comment.content}</div>
      <div>{comment.created_at}</div>
    </div>
  );
}

export default CommentDetailItem;
