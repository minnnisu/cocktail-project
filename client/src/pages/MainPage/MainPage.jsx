import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useLogoutPostApi } from "../../hooks/useAuthApi";
import { useUserDataGetApi } from "../../hooks/useUserApi";
import Textarea from "../../components/UI/Textarea/Textarea";
import Input from "../../components/UI/Input/Input";
import { usePostPostApi } from "../../hooks/usePostApi";

function MainPage() {
  const { isLoading, isSuccess, isError, data } = useUserDataGetApi();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);
  const handleImageUpload = (event) => {
    const newImages = [...images];
    for (let i = 0; i < event.target.files.length; i++) {
      newImages.push(event.target.files[i]);
    }
    setImages(newImages);
  };
  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const navigate = useNavigate();

  const handleLoginMove = () => {
    navigate("/login");
  };

  const handleSignUpMove = () => {
    navigate("/signup");
  };

  const logoutMutation = useLogoutPostApi();
  const postMutation = usePostPostApi();

  const handleLogoutButtonClick = () => {
    logoutMutation.mutate();
  };

  const handlePostButtonClick = () => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ title, content }));
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    postMutation.mutate(formData);
  };

  return (
    <div className="App">
      <>
        {isLoading && <div>데이터를 불러오는 중입니다.</div>}
        {isError && (
          <div>데이터를 불러오는 과정에서 오류가 발생하였습니다.</div>
        )}
        {isSuccess && <div>{JSON.stringify(data)}</div>}
      </>
      <Button onClickButton={handleLoginMove}>로그인</Button>
      <Button onClickButton={handleSignUpMove}>회원가입</Button>
      <Button onClickButton={handleLogoutButtonClick}>로그아웃</Button>
      <div>
        <div>
          <Input
            title={"제목"}
            name={"title"}
            value={title}
            onChangeValue={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Textarea onChangeTextarea={setContent} />
        </div>
        <Button onClickButton={handlePostButtonClick}>게시물 등록</Button>
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        {images.map((image, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
            <button onClick={() => handleImageDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
