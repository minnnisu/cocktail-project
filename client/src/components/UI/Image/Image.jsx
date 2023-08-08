import style from "./Image.module.css";
import ImagePreview from "./ImagePreview/ImagePreview";

function Image({ ImageRef, image, setImage }) {
  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(image.preview_URL); // 기존 URL을 폐기
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      });
    }
  };

  return (
    <div className={style.image_container}>
      <input
        className={style.image_input}
        type="file"
        accept="image/*"
        ref={ImageRef}
        onChange={handleImageChange}
      />
      <ImagePreview image={image.preview_URL} />
    </div>
  );
}

export default Image;
