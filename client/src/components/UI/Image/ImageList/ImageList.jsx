import Button from "../../Button/Button";
import styles from "./ImageList.module.css";

function ImgaeList({ images, setImages }) {
  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <div className={styles.image_list_container}>
      {images.map((image, index) => (
        <div className={styles.image_wrapper} key={index}>
          <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          <Button
            backgroundColor={"red"}
            onClickButton={() => handleImageDelete(index)}
          >
            {"삭제"}
          </Button>
        </div>
      ))}
    </div>
  );
}
export default ImgaeList;
