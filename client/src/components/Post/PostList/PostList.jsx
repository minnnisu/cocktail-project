import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";

function PostList({ posts, setSelectedPost }) {
  return (
    <div className={styles.post_list}>
      {posts.map((post, index) => {
        return (
          <PostItem key={index} post={post} setSelectedPost={setSelectedPost} />
        );
      })}
    </div>
  );
}

export default PostList;
