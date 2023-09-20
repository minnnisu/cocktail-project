import { useCommentGetApi } from "../../../../hooks/usePostApi";
import CommentDetailItem from "../CommentDetailItem/CommentDetailItem";
import styles from "./CommentDetailList.module.css";

function CommentDetailList({ postId }) {
  const { data } = useCommentGetApi(postId);
  console.log(data);
  return (
    <div className={styles.comment_list}>
      {data &&
        data.length > 0 &&
        data.map((comment, index) => (
          <CommentDetailItem key={index} comment={comment} />
        ))}
    </div>
  );
}

export default CommentDetailList;
