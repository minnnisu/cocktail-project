import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useUserDataGetApi } from "../../hooks/useAuthApi";

function MainPage() {
  const { isLoading, isSuccess, isError, data } = useUserDataGetApi();
  console.log(data);

  const navigate = useNavigate();

  const handleLoginMove = () => {
    navigate("/login");
  };

  const handleSignUpMove = () => {
    navigate("/sign-up");
  };

  return (
    <div className="App">
      <>
        {isLoading && <div>데이터를 불러오는 중입니다.</div>}
        {isError && (
          <div>데이터를 불러오는 과정에서 오류가 발생하였습니다.</div>
        )}
        {isSuccess && <div>{data.username}</div>}
      </>
      <Button onClickButton={handleLoginMove}>로그인</Button>
      <Button onClickButton={handleSignUpMove}>회원가입</Button>
    </div>
  );
}

export default MainPage;
