import { useState } from "react";
import { useCommentGetApi } from "../../../../hooks/usePostApi";
import MoreTaskModal from "../../../UI/MoreTaskModal/MoreTaskModal";
import CommentDetailItem from "../CommentDetailItem/CommentDetailItem";
import styles from "./CommentDetailList.module.css";

function CommentDetailList({ postId }) {
  const { data } = useCommentGetApi(postId);
  const [taskShow, setTaskShow] = useState(false);
  const handleMoreTaskClose = () => setTaskShow(false);
  const HandleMoreTaskShow = () => setTaskShow(true);
  const tasks = ["수정하기", "삭제하기"];
  const HandleMoreTaskItemClick = (index) => {
    console.log(tasks[index]);
  };

  return (
    <div className={styles.comment_list}>
      <MoreTaskModal
        show={taskShow}
        handleClose={handleMoreTaskClose}
        tasks={tasks}
        onClickTask={HandleMoreTaskItemClick}
      />
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
