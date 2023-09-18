import Images from "../../../UI/Image/Images";
import PostImageModifyList from "../PostImageModifyList/PostImageModifyList";

function PostImageModifyContainer({
  originalImages,
  setOriginalImages,
  newImages,
  setNewImages,
}) {
  console.log(originalImages, newImages);
  return (
    <>
      <Images images={newImages} setImages={setNewImages} />
      <PostImageModifyList
        originalImages={originalImages}
        setOriginalImages={setOriginalImages}
      />
    </>
  );
}

export default PostImageModifyContainer;
