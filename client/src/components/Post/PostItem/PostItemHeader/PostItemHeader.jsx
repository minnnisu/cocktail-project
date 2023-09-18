function PostItemHeader({ post }) {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.author.nickname}</div>
      <div>{post.created_at}</div>
    </div>
  );
}

export default PostItemHeader;
