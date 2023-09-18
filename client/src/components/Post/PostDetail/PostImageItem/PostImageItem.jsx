import { url } from "../../../../apis/config/domain";
import styles from "./PostImageItem.module.css";

function PostImageItem({ index, imageName }) {
  return (
    <img
      className={styles.image}
      width={100}
      key={index}
      src={`${url}/static/image/post/${imageName}`}
      alt={`게시물 이미지 ${index}`}
    />
  );
}

export default PostImageItem;
