import CommentDetailItemContent from "./CommentDetailItemContent/CommentDetailItemContent";
import CommentDetailItemHeader from "./CommentDetailItemHeader/CommentDetailItemHeader";
import styles from "./CommentDetailItem.module.css";

function CommentDetailItem({ comment, HandleMoreTaskShow }) {
  return (
    <div className={styles.comment_item}>
      <CommentDetailItemHeader
        HandleMoreTaskShow={HandleMoreTaskShow}
        comment={comment}
      />
      <CommentDetailItemContent content={comment.content} />
    </div>
  );
}

export default CommentDetailItem;
