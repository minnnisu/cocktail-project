import React from "react";
import UserFind from "../../components/Login/UserFind/UserFind";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import Outer from "../../components/UI/Outer/Outer";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.gradient_background}>
      <Outer title={"로그인"} widthSize={"medium"}>
        <LoginForm />
        <UserFind />
      </Outer>
    </div>
  );
}

export default LoginPage;
