import Image from "../../UI/Image/Image";
import { useRef } from "react";
import Buttons from "./Buttons/Buttons";
import Title from "../../UI/Title/Title";
import style from "./ImageForm.module.css";

function ImageForm({ image, setImage }) {
  const ImageRef = useRef(null);

  return (
    <>
      <div className={style.title_container}>
        <Title size={4}>이미지</Title>
      </div>

      <Buttons ImageRef={ImageRef} setImage={setImage} />
      <Image ImageRef={ImageRef} image={image} setImage={setImage} />
    </>
  );
}

export default ImageForm;
