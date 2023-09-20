import styles from "./PostDetailFooter.module.css";
import HeartFill from "../../../../assets/icon/heart_fill.png";
import { usePostPatchApi } from "../../../../hooks/usePostApi";
import { useAuthHandler } from "../../../../hooks/useAuthHandler";
import Title from "../../../UI/Title/Title";

function PostDetailFooter({ heartSize, postId }) {
  const postPatchMutation = usePostPatchApi(postId);
  const { user } = useAuthHandler();

  const handleHeartClick = () => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify({ heart: true }));

    postPatchMutation.mutate(formData);
  };

  return (
    <div className={styles.footer}>
      <Title size={4}>댓글</Title>
      <div className={styles.heart}>
        <img
          onClick={handleHeartClick}
          className={styles.heart_icon}
          src={HeartFill}
        />
        <div className={styles.heart_count}>{heartSize}</div>
      </div>
    </div>
  );
}

export default PostDetailFooter;
