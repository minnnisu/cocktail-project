import React from "react";
import UserFind from "../../components/Login/UserFind/UserFind";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import Outer from "../../components/UI/Outer/Outer";

function LoginPage() {
  return (
    <Outer title={"로그인"} widthSize={"medium"}>
      <LoginForm />
      <UserFind />
    </Outer>
  );
}

export default LoginPage;
