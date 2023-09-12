import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage({ setIsLogined, setSelectedMenu }) {
  return (
    <LoginForm setIsLogined={setIsLogined} setSelectedMenu={setSelectedMenu} />
  );
}

export default LoginPage;
