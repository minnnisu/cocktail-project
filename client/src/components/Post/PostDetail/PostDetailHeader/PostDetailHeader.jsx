import { useNavigate, useParams } from "react-router-dom";
import { useAuthHandler } from "../../../../hooks/useAuthHandler";
import {
  usePostDeleteApi,
  usePostPatchApi,
} from "../../../../hooks/usePostApi";
import Title from "../../../UI/Title/Title";
import styles from "./PostDetailHeader.module.css";

function PostDetailHeader({ postId, title, author, createdAt, heartSize }) {
  const { user } = useAuthHandler();
  const navigate = useNavigate();
  const postPatchMutation = usePostPatchApi(postId);
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

  const handleHeartClick = () => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify({ heart: true }));

    postPatchMutation.mutate(formData);
  };

  return (
    <div className={styles.header_container}>
      <Title>{title}</Title>
      <div className={styles.nickname}>{author.nickname}</div>
      <div className={styles.created_at}>{createdAt}</div>
      <div onClick={handleHeartClick}>하트 {heartSize}</div>
      <button onClick={handlePostDelete}>삭제하기</button>
    </div>
  );
}

export default PostDetailHeader;
