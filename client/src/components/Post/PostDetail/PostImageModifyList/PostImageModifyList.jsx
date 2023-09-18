import { url } from "../../../../apis/config/domain";
import PostImageModifyItem from "../PostImageModifyItem/PostImageModifyItem";

function PostImageModifyList({ originalImages, setOriginalImages }) {
  const handleExistingImageDelete = (index) => {
    setOriginalImages((prev) => {
      const newRemained = [...prev.remained];
      const newRemoved = [...prev.removed];
      newRemoved.push(prev.remained[index]);
      newRemained.splice(index, 1);
      return { remained: newRemained, removed: newRemoved };
    });
  };

  return (
    <>
      {originalImages.remained &&
        originalImages.remained.length > 0 &&
        originalImages.remained.map((image, index) => (
          <PostImageModifyItem
            key={index}
            src={`${url}/static/image/post/${image}`}
            index={index}
            onClickDeleteButton={handleExistingImageDelete}
          />
        ))}
    </>
  );
}

export default PostImageModifyList;
