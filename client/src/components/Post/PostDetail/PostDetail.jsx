import PostDetailHeader from "./PostDetailHeader/PostDetailHeader";
import PostDetailContent from "./PostDetailContent/PostDetailContent";
import PostDetailImageList from "./PostDetailImageList/PostDetailImageList";
import CommentDetailList from "./CommentDetailList/CommentDetailList";
import CommentDetailInput from "./CommentDetailInput/CommentDetailInput";
import styles from "./PostDetail.module.css";
import PostDetailFooter from "./PostDetailFooter/PostDetailFooter";
import { useParams } from "react-router-dom";
import { usePostGetApi } from "../../../hooks/usePostApi";

function PostDetail() {
  const { id } = useParams();
  const { data } = usePostGetApi(id);
  return (
    <>
      {data && data.length > 0 && (
        <div className={styles.post_detail}>
          <PostDetailHeader
            title={data[0].title}
            author={data[0].author}
            createdAt={data[0].created_at}
          />
          <PostDetailContent content={data[0].content} />
          <PostDetailImageList images={data[0].images} />
          <PostDetailFooter
            postId={data[0].postId}
            heartSize={data[0].heartSize}
          />
          <CommentDetailInput postId={data[0].postId} />
          <CommentDetailList postId={data[0].postId} />
        </div>
      )}
    </>
  );
}

export default PostDetail;
