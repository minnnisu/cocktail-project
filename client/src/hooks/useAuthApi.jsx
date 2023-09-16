import { useNavigate } from "react-router-dom";
import useApiPostQuery from "./useApiPostQuery";

export const useSignUpPostApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = (data) => {
    alert("회원가입에 성공했습니다");
  };

  return useApiPostQuery("/api/auth/signup", onSuccess, onError);
};

export const useLoginPostApi = () => {
  const mutation = useLogoutPostApi();
  const navigate = useNavigate();

  const onError = (error) => {
    if (error.response.data.code === "ALREADY_LOGIN") {
      mutation.mutate(null, {
        onSuccess: function () {
          navigate("/");
          alert("로그인해주세요.");
        },
        onError: function () {
          alert("일시적인 오류가 발생하였습니다.");
        },
      });
    } else {
      alert(error.response.data.message);
    }
  };

  return useApiPostQuery("/api/auth/login", null, onError);
};

export const useLogoutPostApi = (setUser) => {
  const navigate = useNavigate();
  const onError = (error) => {
    if (error.response.data.code === "NEED_LOGIN") {
      localStorage.removeItem("id");
      setUser(null);
      alert("로그아웃에 성공했습니다");
      navigate("/");
    } else {
      alert(error.response.data.message);
    }
  };

  return useApiPostQuery("/api/auth/logout", null, onError);
};
