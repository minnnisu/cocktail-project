import { useEffect, useState } from "react";
import PostTitleModify from "./PostTitleModify/PostTitleModify";
import PostImageModify from "./PostContentModify/PostImageModify";
import PostImageModifyContainer from "../PostDetail/PostImageModifyContainer/PostImageModifyContainer";

function PostModify() {
  const [modifiedData, setModifiedData] = useState({
    title: "",
    content: "",
  });
  const [originalImages, setOriginalImages] = useState({
    remained: [],
    removed: [],
  });
  const [newImages, setNewImages] = useState([]);
  const postPatchMutation = usePostPatchApi(id);

  useEffect(() => {
    if (data) {
      setModifiedData({
        title: data[0].title,
        content: data[0].content,
      });

      setOriginalImages((prev) => ({ ...prev, remained: data[0].images }));
    }
  }, [data]);

  const handleModifiedDataChange = (e) => {
    setModifiedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleModifiedDataSubmit = (e) => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    if (user !== data[0].author.id) {
      return alert("작성자만 수정가능합니다");
    }

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        title: modifiedData.title,
        content: modifiedData.content,
        imageRemoveTarget: originalImages.removed,
      })
    );
    for (let i = 0; i < newImages.length; i++) {
      formData.append("images", newImages[i]);
    }

    postPatchMutation.mutate(formData);
  };

  return (
    <>
      <PostTitleModify
        value={modifiedData.title}
        onChange={handleModifiedDataChange}
      />
      <PostImageModify
        value={modifiedData.content}
        onChange={handleModifiedDataChange}
      />
      <PostImageModifyContainer
        originalImages={originalImages}
        setOriginalImages={setOriginalImages}
        newImages={newImages}
        setNewImages={setNewImages}
      />
      {/* {isModifiedButtonClick && (
            <div>
              <hr />
              <div>수정할 이미지</div>
              <Images images={newImageData} setImages={setNewImageData} />
              {originalImageData.remained &&
                originalImageData.remained.length > 0 &&
                originalImageData.remained.map((imageName, index) => {
                  return (
                    <div key={index}>
                      <img
                        width={100}
                        src={`${url}/static/image/post/${imageName}`}
                        alt={`게시물 이미지 ${index}`}
                      />
                      <button
                        onClick={() => {
                          handleExistingImageDelete(index);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  );
                })}
            </div>
          )} */}
      <button onClick={handleModifiedDataSubmit}>수정하기</button>
    </>
  );
}

export default PostModify;
