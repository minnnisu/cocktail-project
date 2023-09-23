import MultipleImageItem from "../ImageItem/MultipleImageItem/MultipleImageItem";
import styles from "./ImageList.module.css";

function ImgaeList({ images, setImages }) {
  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <>
      {images.map((image, index) => (
        <MultipleImageItem
          key={index}
          src={URL.createObjectURL(image)}
          index={index}
          onClickDeleteButton={handleImageDelete}
        />
      ))}
    </>
  );
}
export default ImgaeList;
