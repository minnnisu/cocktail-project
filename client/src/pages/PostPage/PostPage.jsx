import { useState } from "react";
import MyPost from "../../components/MyPost/MyPost";
import PostUploader from "../../components/PostUploader/PostUploader";
import Allpost from "../../components/AllPost/AllPost";

function PostPage() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  function handleSelectedMenuChange(index) {
    setSelectedMenu(index);
  }

  return (
    <>
      <ul>
        <li onClick={() => handleSelectedMenuChange(0)}>게시물 등록</li>
        <li onClick={() => handleSelectedMenuChange(1)}>내 게시물</li>
        <li onClick={() => handleSelectedMenuChange(2)}>모든 게시물</li>
      </ul>
      {selectedMenu === 0 && <PostUploader />}
      {selectedMenu === 1 && <MyPost />}
      {selectedMenu === 2 && <Allpost />}
    </>
  );
}

export default PostPage;
