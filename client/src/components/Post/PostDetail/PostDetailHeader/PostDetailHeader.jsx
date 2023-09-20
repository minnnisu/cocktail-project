import { useNavigate } from "react-router-dom";
import { useAuthHandler } from "../../../../hooks/useAuthHandler";
import { usePostDeleteApi } from "../../../../hooks/usePostApi";
import Title from "../../../UI/Title/Title";
import styles from "./PostDetailHeader.module.css";

function PostDetailHeader({ postId, title, author, createdAt }) {
  const { user } = useAuthHandler();
  const navigate = useNavigate();
  const date = new Date(createdAt);

  const postDeleteMutation = usePostDeleteApi(postId);

  const handlePostDelete = () => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    if (user !== author.id) {
      return alert("작성자만 수정가능합니다");
    }

    postDeleteMutation.mutate();
    navigate("/post");
  };

  return (
    <div className={styles.header}>
      <Title size={5}>{title}</Title>
      <div className={styles.header_right}>
        <div className={styles.nickname}>{author.nickname}</div>
        <div className={styles.created_at}>{`${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</div>
        {/* <button onClick={handlePostDelete}>삭제하기</button> */}
      </div>
    </div>
  );
}

export default PostDetailHeader;
