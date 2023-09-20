import { url } from "../../../../apis/config/domain";
import styles from "./PostItemImage.module.css";

function PostItemImage({ image }) {
  return (
    <img
      className={styles.image}
      src={`${url}/static/image/post/${image}`}
      alt={"게시물 이미지"}
    />
  );
}

export default PostItemImage;
