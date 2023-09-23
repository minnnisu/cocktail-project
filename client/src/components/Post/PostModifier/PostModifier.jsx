import { useParams } from "react-router-dom";
import PostUpload from "../PostUpload/PostUpload";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { usePostUpload } from "../../../hooks/usePostUpload";

function PostModifier() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(id);

  return <PostUpload id={id} user={user} hookFunc={usePostUpload} />;
}

export default PostModifier;
