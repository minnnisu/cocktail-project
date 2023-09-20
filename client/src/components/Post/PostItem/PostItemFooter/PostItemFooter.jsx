import styles from "./PostItemFooter.module.css";
import HeartFill from "../../../../assets/icon/heart_fill.png";
import { useNavigate } from "react-router-dom";

function PostItemFooter({ heartSize, onClickPostDetailButton, postId }) {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      <div className={styles.heart}>
        <img className={styles.heart_icon} src={HeartFill} />
        <div className={styles.heart_count}>{heartSize}</div>
      </div>
      <button
        className={styles.detail_button}
        onClick={() => navigate(`/post/${postId}`)}
      >
        자세히보기
      </button>
    </div>
  );
}

export default PostItemFooter;
