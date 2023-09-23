import styles from "./PostUploadImageBottom.module.css";
import Button from "../../../../UI/Button/Button";

function PostUploadImageBottom({
  ImageRef,
  newImages,
  setNewImages,
  onClickImageUploadButton,
}) {
  const handleImageUpload = (event) => {
    const tmp = [...newImages];
    for (let i = 0; i < event.target.files.length; i++) {
      tmp.push(event.target.files[i]);
    }
    setNewImages(tmp);
  };

  return (
    <div className={styles.bottom}>
      <input
        className={styles.image_input}
        type="file"
        accept="image/*"
        multiple
        ref={ImageRef}
        onChange={handleImageUpload}
      />
      <Button onClickButton={onClickImageUploadButton}>이미지 추가</Button>
    </div>
  );
}

export default PostUploadImageBottom;
