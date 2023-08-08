import Outer from "../../../layouts/CocktailAppendForm/Outer";

import Image from "../../UI/Image/Image";
import { useRef } from "react";
import Buttons from "./Buttons/Buttons";

function ImageForm({ image, setImage }) {
  const ImageRef = useRef(null);

  return (
    <Outer title={"이미지"}>
      <Buttons ImageRef={ImageRef} setImage={setImage} />
      <Image ImageRef={ImageRef} image={image} setImage={setImage} />
    </Outer>
  );
}

export default ImageForm;
