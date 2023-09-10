import Button from "../../Button/Button";
import style from "./ImageList.module.css";

function ImgaeList({ images, setImages }) {
  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <div className={style.image_list_container}>
      {images.map((image, index) => (
        <div className={style.image_wrapper} key={index}>
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
