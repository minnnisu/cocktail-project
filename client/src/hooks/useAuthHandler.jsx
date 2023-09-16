import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLoginPostApi, useLogoutPostApi } from "./useAuthApi";
import { useNavigate } from "react-router-dom";

export const useAuthHandler = () => {
  const { user, setUser } = useContext(AuthContext);
  const loginMutation = useLoginPostApi();
  const navigate = useNavigate();

  const login = (loginFormData) => {
    loginMutation.mutate(loginFormData, {
      onSuccess: function () {
        alert("로그인에 성공했습니다");
        localStorage.setItem(
          "id",
          JSON.stringify({ userid: loginFormData.username })
        );
        setUser(loginFormData.username);
        navigate("/");
      },
    });
  };

  const logoutMutation = useLogoutPostApi(setUser);

  const logout = () => {
    logoutMutation.mutate(null, {
      onSuccess: function () {
        alert("로그아웃에 성공했습니다");
        localStorage.removeItem("id");
        setUser(null);
        navigate("/");
      },
    });
  };

  return { user, login, logout };
};
