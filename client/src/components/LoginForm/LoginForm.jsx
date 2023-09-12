import { useState } from "react";
import { useLoginPostApi } from "../../hooks/useAuthApi";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input/Input";
import Outer from "../UI/Outer/Outer";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
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

  const loginMutation = useLoginPostApi();
  const navigate = useNavigate();

  const handleSubmit = () => {
    loginMutation.mutate(loginFormData, {
      onSuccess: function () {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: loginFormData.username })
        );
        setUser(loginFormData.username);
        navigate("/");
      },
    });
  };

  return (
    <div className={styles.container}>
      <Outer title={"로그인"}>
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
        <ul className={styles.find_container}>
          <li>비밀번호 찾기</li>
          <li>회원가입</li>
        </ul>
      </Outer>
    </div>
  );
}

export default LoginForm;
