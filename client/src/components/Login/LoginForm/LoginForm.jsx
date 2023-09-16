import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import { useAuthHandler } from "../../../hooks/useAuthHandler";

function LoginForm() {
  const { login } = useAuthHandler();
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    login(loginFormData);
  };

  return (
    <>
      <Input
        inputWidth={"large"}
        title={"아이디"}
        name={"username"}
        value={loginFormData.username}
        onChangeValue={handleChange}
      />
      <Input
        inputWidth={"large"}
        title={"패스워드"}
        name={"password"}
        type={"password"}
        value={loginFormData.password}
        onChangeValue={handleChange}
      />
      <Button onClickButton={handleSubmit} buttonWidth={"large"}>
        로그인
      </Button>
    </>
  );
}

export default LoginForm;
