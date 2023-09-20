import PostShowLayout from "../../../layouts/PostShowLayout/PostShowLayout";
import PostList from "../PostList/PostList";

function PostContainer({ posts }) {
  return (
    <PostShowLayout>
      {posts && posts.length > 0 && <PostList posts={posts} />}
    </PostShowLayout>
  );
}

export default PostContainer;
