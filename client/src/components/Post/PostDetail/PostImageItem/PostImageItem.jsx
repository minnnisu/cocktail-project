import { serverUrl } from "../../../../apis/config/domain";
import styles from "./PostImageItem.module.css";

function PostImageItem({ index, imageName }) {
  return (
    <img
      className={styles.image}
      key={index}
      src={`${serverUrl}/static/image/post/${imageName}`}
      alt={`게시물 이미지 ${index}`}
    />
  );
}

export default PostImageItem;
