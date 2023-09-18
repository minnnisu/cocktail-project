import PostDetailHeader from "./PostDetailHeader/PostDetailHeader";
import PostDetailContent from "./PostDetailContent/PostDetailContent";
import PostDetailImageList from "./PostDetailImageList/PostDetailImageList";
import CommentDetailList from "./CommentDetailList/CommentDetailList";
import CommentDetailInput from "./CommentDetailInput/CommentDetailInput";

function PostDetail({ post }) {
  return (
    <div>
      <PostDetailHeader
        postId={post.postId}
        title={post.title}
        author={post.author}
        createdAt={post.created_at}
        heartSize={post.heartSize}
      />
      <PostDetailContent content={post.content} />
      <PostDetailImageList images={post.images} />
      <CommentDetailInput postId={post.postId} />
      <CommentDetailList comments={post.comments} />
    </div>
  );
}

export default PostDetail;
