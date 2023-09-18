import PostImageModifyContainer from "../../PostDetail/PostImageModifyContainer/PostImageModifyContainer";

function PostImageModify() {
  return (
    <PostImageModifyContainer
      originalImages={originalImageData}
      setOriginalImages={setOriginalImageData}
      newImages={newImageData}
      setNewImages={setNewImageData}
    />
  );
}

export default PostImageModify;
