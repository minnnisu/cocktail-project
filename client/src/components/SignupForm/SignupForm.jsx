import styles from "./SignupForm.module.css";
import { useState } from "react";
import Outer from "../UI/Outer/Outer";
import Input from "../UI/Input/Input";
import { useSignUpPostApi } from "../../hooks/useAuthApi";
import Button from "../UI/Button/Button";

function SignupForm() {
  const [signUpFormData, setsignUpFormData] = useState({
    id: "",
    password: "",
    username: "",
    nickname: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpFormData({
      ...signUpFormData,
      [name]: value,
    });
  };

  const signUpMutation = useSignUpPostApi();

  const handleSubmit = () => {
    signUpMutation.mutate(signUpFormData);
  };

  return (
    <div className={styles.container}>
      <Outer title={"회원가입"} gap={"large"}>
        <Input
          title={"아이디"}
          type="text"
          name="id"
          value={signUpFormData.id}
          onChangeValue={handleChange}
          inputWidth={"large"}
        />
        <Input
          title={"비밀번호"}
          type="password"
          name="password"
          value={signUpFormData.password}
          onChangeValue={handleChange}
          inputWidth={"large"}
        />
        <Input
          title={"이름"}
          name="username"
          value={signUpFormData.username}
          onChangeValue={handleChange}
          inputWidth={"large"}
        />
        <Input
          title={"닉네임"}
          name="nickname"
          value={signUpFormData.nickname}
          onChangeValue={handleChange}
          inputWidth={"large"}
        />
        <Input
          title={"이메일"}
          type="email"
          name="email"
          value={signUpFormData.email}
          onChangeValue={handleChange}
          inputWidth={"large"}
        />
        <Input
          title={"전화번호"}
          name="telephone"
          value={signUpFormData.telephone}
          onChangeValue={handleChange}
          inputWidth={"large"}
        />
        <Button onClickButton={handleSubmit} buttonWidth={"large"}>
          가입하기
        </Button>
      </Outer>
    </div>
  );
}

export default SignupForm;
