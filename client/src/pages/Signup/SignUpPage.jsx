import React, { useState } from "react";
import { useSignUpPostApi } from "../../hooks/useAuthApi";

const SignUpPage = () => {
  const [signUpFormData, setsignUpFormData] = useState({
    userid: "",
    password: "",
    username: "",
    alias: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("userid", signUpFormData.userid);
    // formData.append("password", signUpFormData.password);
    // formData.append("name", signUpFormData.name);
    // formData.append("nickname", signUpFormData.nickname);
    // formData.append("email", signUpFormData.email);
    // formData.append("telephone", signUpFormData.telephone);

    // signUpMutation.mutate(formData);
    signUpMutation.mutate(signUpFormData);
  };

  return (
    <div className="signup-form">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userid">아이디:</label>
          <input
            type="text"
            id="userid"
            name="userid"
            value={signUpFormData.userid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signUpFormData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">이름:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={signUpFormData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="alias">닉네임:</label>
          <input
            type="text"
            id="alias"
            name="alias"
            value={signUpFormData.alias}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signUpFormData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">전화번호:</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={signUpFormData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
