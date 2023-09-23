import styles from "./PostUploadImage.module.css";
import PostUploadImagePreview from "./PostUploadImagePreview/PostUploadImagePreview";
import PostUploadImageBottom from "./PostUploadImageBottom/PostUploadImageBottom";
import { useRef } from "react";

function PostUploadImage({
  originalImages,
  setOriginalImages,
  newImages,
  setNewImages,
}) {
  const ImageRef = useRef(null);

  const handleImageApppendButtonClick = () => {
    if (ImageRef.current) {
      ImageRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <PostUploadImagePreview
        originalImages={originalImages}
        setOriginalImages={setOriginalImages}
        newImages={newImages}
        setNewImages={setNewImages}
      />
      <PostUploadImageBottom
        ImageRef={ImageRef}
        newImages={newImages}
        setNewImages={setNewImages}
        onClickImageUploadButton={handleImageApppendButtonClick}
      />
    </div>
  );
}

export default PostUploadImage;
