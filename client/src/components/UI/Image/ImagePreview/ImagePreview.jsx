import styles from "./ImagePreview.module.css";

function ImagePreview({ image }) {
  return (
    <div className={styles.image_preview_container}>
      {image && <img className={styles.preview_image} src={image} />}
      {!image && <div>업로드 된 이미지가 없습니다.</div>}
    </div>
  );
}

export default ImagePreview;
