import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useLoginPostApi } from "../../../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function LoginForm() {
  const loginMutation = useLoginPostApi();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
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
    loginMutation.mutate(loginFormData, {
      onSuccess: function () {
        localStorage.setItem(
          "id",
          JSON.stringify({ userid: loginFormData.username })
        );
        setUser(loginFormData.username);
        navigate("/");
      },
    });
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
