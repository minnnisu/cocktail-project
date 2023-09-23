import styles from "./MultipleImageItem.module.css";

function MultipleImageItem({ src, index, onClickDeleteButton }) {
  return (
    <div className={styles.image_container}>
      <img className={styles.image} src={src} alt={`게시물 이미지`} />
      <button
        className={styles.delete_button}
        onClick={() => {
          onClickDeleteButton(index);
        }}
      >
        X
      </button>
    </div>
  );
}

export default MultipleImageItem;
