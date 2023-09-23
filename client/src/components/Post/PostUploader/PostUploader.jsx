import PostUpload from "../PostUpload/PostUpload";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { usePostUpload } from "../../../hooks/usePostUpload";
import PostHeader from "../PostHeader/PostHeader";

function PostUploader() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <PostHeader />
      <PostUpload user={user} hookFunc={usePostUpload} type={"upload"} />;
    </>
  );
}

export default PostUploader;
