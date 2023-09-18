import PostShowLayout from "../../../layouts/PostShowLayout/PostShowLayout";
import PostList from "../PostList/PostList";
import PostDetail from "../PostDetail/PostDetail";
import { useState } from "react";

function PostContainer({ posts }) {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <PostShowLayout>
      {posts && posts.length > 0 && (
        <>
          <PostList posts={posts} setSelectedPost={setSelectedPost} />
          <PostDetail post={posts[selectedPost]} selectedPost={selectedPost} />
        </>
      )}
    </PostShowLayout>
  );
}

export default PostContainer;
