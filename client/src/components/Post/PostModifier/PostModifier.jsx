import { useParams } from "react-router-dom";
import PostUpload from "../PostUpload/PostUpload";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { usePostModify } from "../../../hooks/usePostModify";

function PostModifier() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  return (
    <PostUpload id={id} user={user} hookFunc={usePostModify} type={"modify"} />
  );
}

export default PostModifier;
