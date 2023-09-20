import PostImageItem from "../PostImageItem/PostImageItem";
import styles from "./PostDetailImageList.module.css";

function PostDetailImageList({ images }) {
  return (
    <div className={styles.image_list}>
      {images.map((image, index) => (
        <PostImageItem key={index} imageName={image} index={index} />
      ))}
    </div>
  );
}

export default PostDetailImageList;
