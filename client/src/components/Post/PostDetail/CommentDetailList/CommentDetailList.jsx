import { useContext, useState } from "react";
import {
  useCommentDeleteApi,
  useCommentGetApi,
} from "../../../../hooks/usePostApi";
import MoreTaskModal from "../../../UI/MoreTaskModal/MoreTaskModal";
import CommentDetailItem from "../CommentDetailItem/CommentDetailItem";
import styles from "./CommentDetailList.module.css";
import CommentModifyModal from "../../PostModifier/CommentModifyModal/CommentModifyModal";
import { AuthContext } from "../../../../contexts/AuthContext";

function CommentDetailList({ postId }) {
  const { data } = useCommentGetApi(postId);
  const { user } = useContext(AuthContext);

  const [taskModalShow, setTaskModalShow] = useState(false);
  const [modifyModalShow, setModifyModalShow] = useState(false);
  const [taskComment, setTaskComment] = useState(null);

  const commentMutation = useCommentDeleteApi(postId, taskComment?._id);

  const tasks = ["수정하기", "삭제하기"];
  const handleMoreTaskClose = () => {
    setTaskModalShow(false);
  };

  const HandleMoreTaskShow = (comment) => {
    setTaskModalShow(true);
    setTaskComment(comment);
  };

  const handleModifyModalClose = () => {
    setModifyModalShow(false);
  };
  const HandleModifyModalShow = () => {
    setModifyModalShow(true);
  };

  const handleCommentDelete = () => {
    if (!user) {
      return alert("로그인 해주세요");
    } else if (user != taskComment.author.id) {
      return alert("삭제는 댓글을 작성한 사람만 할 수 있습니다");
    }

    commentMutation.mutate(null, {
      onSuccess: function () {
        handleMoreTaskClose();
      },
    });
  };

  const HandleMoreTaskItemClick = (index) => {
    if (index === 0) {
      handleMoreTaskClose();
      HandleModifyModalShow();
    } else if (index === 1) {
      handleCommentDelete();
    }
  };

  return (
    <div className={styles.comment_list}>
      {taskModalShow && (
        <MoreTaskModal
          show={taskModalShow}
          handleClose={handleMoreTaskClose}
          tasks={tasks}
          onClickTask={HandleMoreTaskItemClick}
        />
      )}
      {modifyModalShow && (
        <CommentModifyModal
          show={modifyModalShow}
          handleClose={handleModifyModalClose}
          postId={postId}
          comment={taskComment}
        />
      )}
      {data &&
        data.length > 0 &&
        data.map((comment, index) => (
          <CommentDetailItem
            key={index}
            comment={comment}
            HandleMoreTaskShow={HandleMoreTaskShow}
          />
        ))}
    </div>
  );
}

export default CommentDetailList;
