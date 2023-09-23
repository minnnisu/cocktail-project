import styles from "./SingleImageUploader.module.css";
import SingleImageItem from "../../ImageItem/SingleImageItem/SingleImageItem";

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

  console.log(image);

  return (
    <div className={styles.image_container}>
      <input
        className={styles.image_input}
        type="file"
        accept="image/*"
        ref={ImageRef}
        onChange={handleImageChange}
      />
      <SingleImageItem src={image.preview_URL} />
    </div>
  );
}

export default Image;
