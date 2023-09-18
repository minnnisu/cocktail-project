import { url } from "../../../apis/config/domain";
import styles from "./PostItem.module.css";
import PostItemHeader from "./PostItemHeader/PostItemHeader";

function PostItem({ post, index, setSelectedPost }) {
  const handlePostDetailButtonClick = (index) => {
    setSelectedPost(index);
  };

  return (
    <div className={styles.post_item}>
      <PostItemHeader post={post} />
      <div>{post.content}</div>
      <div>하트 {post.heartSize}</div>
      <div>
        {post.images &&
          post.images.length > 0 &&
          post.images.map((imageName, index) => {
            return (
              <img
                width={100}
                key={index}
                src={`${url}/static/image/post/${imageName}`}
                alt={`게시물 이미지 ${index}`}
              />
            );
          })}
      </div>
      <button onClick={() => handlePostDetailButtonClick(index)}>
        자세히보기
      </button>
    </div>
  );
}

export default PostItem;
