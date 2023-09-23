import styles from "./SingleImageItem.module.css";

function SingleImageItem({ src }) {
  return (
    <div className={styles.single_image_container}>
      {src && <img className={styles.single_image} src={src} />}
      {!src && <div>업로드 된 이미지가 없습니다.</div>}
    </div>
  );
}

export default SingleImageItem;
