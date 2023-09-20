import styles from "./PostItem.module.css";
import PostItemContent from "./PostItemContent/PostItemContent";
import PostItemFooter from "./PostItemFooter/PostItemFooter";
import PostItemHeader from "./PostItemHeader/PostItemHeader";
import PostItemImage from "./PostItemImage/PostItemImage";

function PostItem({ post, setSelectedPost }) {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <div className={styles.post_item}>
      <PostItemHeader
        title={post.title}
        nickname={post.author.nickname}
        created_at={post.created_at}
        truncateText={truncateText}
      />
      <PostItemContent content={post.content} truncateText={truncateText} />
      {post.images && post.images.length > 0 && (
        <PostItemImage image={post.images[0]} />
      )}
      <PostItemFooter heartSize={post.heartSize} postId={post.postId} />
    </div>
  );
}

export default PostItem;
