import { useNavigate, useParams } from "react-router-dom";
import {
  usePostDeleteApi,
  usePostGetApi,
  usePostPatchApi,
} from "../../../hooks/usePostApi";
import { url } from "../../../apis/config/domain";
import { useAuthHandler } from "../../../hooks/useAuthHandler";
import { useEffect, useState } from "react";
import Images from "../../UI/Image/Imges";

function PostDetail() {
  let post = {};
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, data } = usePostGetApi(id, {
    summary: true,
  });

  const [isModifiedButtonClick, setIsModifiedButtonClick] = useState(false);
  const [modifiedData, setModifiedData] = useState({
    title: "",
    content: "",
  });

  const [originalImageData, setOriginalImageData] = useState({
    remained: [],
    removed: [],
  });
  const [newImageData, setNewImageData] = useState([]);

  useEffect(() => {
    if (data) {
      setModifiedData({
        title: data[0].title,
        content: data[0].content,
      });

      setOriginalImageData((prev) => ({ ...prev, remained: data[0].images }));
    }
  }, [data]);

  const postPatchMutation = usePostPatchApi(id);
  const postDeleteMutation = usePostDeleteApi(id);

  const { user } = useAuthHandler();

  const handleHeartClick = () => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify({ heart: true }));

    postPatchMutation.mutate(formData);
  };

  const handleModifyButtonClick = () => {
    setIsModifiedButtonClick(true);
  };

  const handleModifiedDataChange = (e) => {
    setModifiedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleExistingImageDelete = (index) => {
    setOriginalImageData((prev) => {
      const newRemained = [...prev.remained];
      const newRemoved = [...prev.removed];
      newRemoved.push(prev.remained[index]);
      newRemained.splice(index, 1);
      return { remained: newRemained, removed: newRemoved };
    });
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
        imageRemoveTarget: originalImageData.removed,
      })
    );
    for (let i = 0; i < newImageData.length; i++) {
      formData.append("images", newImageData[i]);
    }

    postPatchMutation.mutate(formData);
  };

  const handlePostDelete = () => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    if (user !== data[0].author.id) {
      return alert("작성자만 수정가능합니다");
    }

    postDeleteMutation.mutate();
    navigate("/post");
  };

  return (
    <>
      {data && (
        <div>
          <button onClick={handleModifyButtonClick}>수정</button>
          {isModifiedButtonClick ? (
            <input
              name="title"
              value={modifiedData.title}
              onChange={handleModifiedDataChange}
            />
          ) : (
            <div>{data[0].title}</div>
          )}
          <div>작성자 {data[0].author.nickname}</div>
          <div>작성일 {data[0].created_at}</div>
          {isModifiedButtonClick ? (
            <input
              name="content"
              value={modifiedData.content}
              onChange={handleModifiedDataChange}
            />
          ) : (
            <div>{data[0].content}</div>
          )}
          <div onClick={handleHeartClick}>하트 {data[0].heartSize}</div>
          <div>
            {data[0].images &&
              data[0].images.length > 0 &&
              data[0].images.map((imageName, index) => {
                return (
                  <img
                    width={100}
                    key={index}
                    src={`${url}/static/image/post/${imageName}`}
                    alt={`게시물 이미지 ${index}`}
                  />
                );
              })}
          </div>
          {isModifiedButtonClick && (
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
          )}
          <div>
            <textarea />
            <button>댓글 등록</button>
            {isModifiedButtonClick && (
              <>
                {" "}
                <button onClick={handleModifiedDataSubmit}>수정하기</button>
                <button onClick={handlePostDelete}>삭제하기</button>
              </>
            )}
          </div>
          <div>
            {data[0].comments &&
              data[0].comments.length > 0 &&
              data[0].comments.map((comment, index) => (
                <div key={index}>
                  <div>{comment.author}</div>
                  <div>{comment.content}</div>
                  <div>{comment.created_at}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PostDetail;
