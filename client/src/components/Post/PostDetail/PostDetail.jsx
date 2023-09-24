import PostDetailHeader from "./PostDetailHeader/PostDetailHeader";
import PostDetailContent from "./PostDetailContent/PostDetailContent";
import PostDetailImageList from "./PostDetailImageList/PostDetailImageList";
import CommentDetailList from "./CommentDetailList/CommentDetailList";
import CommentDetailInput from "./CommentDetailInput/CommentDetailInput";
import styles from "./PostDetail.module.css";
import PostDetailFooter from "./PostDetailFooter/PostDetailFooter";
import { useNavigate, useParams } from "react-router-dom";
import { usePostDeleteApi, usePostGetApi } from "../../../hooks/usePostApi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import MoreTaskModal from "../../UI/MoreTaskModal/MoreTaskModal";

function PostDetail() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data } = usePostGetApi(id);
  const navigate = useNavigate();
  const tasks = ["수정하기", "삭제하기"];

  const [taskModalShow, setTaskModalShow] = useState(false);

  const handleMoreTaskClose = () => {
    setTaskModalShow(false);
  };

  const HandleMoreTaskShow = () => {
    setTaskModalShow(true);
  };

  const postDeleteMutation = usePostDeleteApi(id);

  const handlePostDelete = () => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    if (user !== data[0].author.id) {
      return alert("작성자만 수정가능합니다");
    }

    postDeleteMutation.mutate(null);
    navigate("/post");
  };

  const HandleMoreTaskItemClick = (index) => {
    if (index === 0) {
      handleMoreTaskClose();
      navigate("modify");
    } else if (index === 1) {
      handlePostDelete();
    }
  };

  return (
    <>
      {data && data.length > 0 && (
        <div className={styles.post_detail}>
          <MoreTaskModal
            show={taskModalShow}
            handleClose={handleMoreTaskClose}
            tasks={tasks}
            onClickTask={HandleMoreTaskItemClick}
          />
          <PostDetailHeader
            title={data[0].title}
            author={data[0].author}
            createdAt={data[0].created_at}
            HandleMoreTaskShow={HandleMoreTaskShow}
          />
          <PostDetailContent content={data[0].content} />
          <PostDetailImageList images={data[0].images} />
          <PostDetailFooter
            postId={data[0].postId}
            heartSize={data[0].heartSize}
          />
          <CommentDetailInput postId={data[0].postId} />
          <CommentDetailList postId={data[0].postId} />
        </div>
      )}
    </>
  );
}

export default PostDetail;
