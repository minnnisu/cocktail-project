import { useRef } from "react";
import style from "./Image.module.css";
import Button from "../Button/Button";
import ImgaeList from "./ImageList/ImageList";

function Images({ images, setImages }) {
  const ImageRef = useRef(null);

  const handleImageApppendButtonClick = () => {
    if (ImageRef.current) {
      ImageRef.current.click();
    }
  };

  const handleImageUpload = (event) => {
    const newImages = [...images];
    for (let i = 0; i < event.target.files.length; i++) {
      newImages.push(event.target.files[i]);
    }
    setImages(newImages);
  };

  return (
    <div>
      <div className={style.image_container}>
        <Button onClickButton={handleImageApppendButtonClick}>{"추가"}</Button>
        <input
          className={style.image_input}
          type="file"
          accept="image/*"
          multiple
          ref={ImageRef}
          onChange={handleImageUpload}
        />
        <ImgaeList images={images} setImages={setImages} />
      </div>
    </div>
  );
}

export default Images;
