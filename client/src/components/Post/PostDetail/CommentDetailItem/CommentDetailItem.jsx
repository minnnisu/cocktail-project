import CommentDetailItemContent from "./CommentDetailItemContent/CommentDetailItemContent";
import CommentDetailItemHeader from "./CommentDetailItemHeader/CommentDetailItemHeader";
import styles from "./CommentDetailItem.module.css";

function CommentDetailItem({ comment }) {
  return (
    <div className={styles.comment_item}>
      <CommentDetailItemHeader
        nickname={comment.author.nickname}
        created_at={comment.created_at}
      />
      <CommentDetailItemContent content={comment.content} />
    </div>
  );
}

export default CommentDetailItem;
