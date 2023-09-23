import styles from "./PostUploadImagePreview.module.css";
import ImgaeList from "../../../../UI/Image/ImageList/ImageList";
import PostExistingImageList from "../PostExistingImageList/PostExistingImageList";

function PostUploadImagePreview({
  originalImages,
  setOriginalImages,
  newImages,
  setNewImages,
}) {
  const handleImageUpload = (event) => {
    const tmp = [...newImages];
    for (let i = 0; i < event.target.files.length; i++) {
      tmp.push(event.target.files[i]);
    }
    setNewImages(tmp);
  };

  return (
    <div className={styles.image_list_container}>
      <ImgaeList images={newImages} setImages={setNewImages} />
      {/* 기존 이미지를 수정하기 위한 컴포넌트 */}
      <PostExistingImageList
        originalImages={originalImages}
        setOriginalImages={setOriginalImages}
      />
    </div>
  );
}

export default PostUploadImagePreview;
