import useApiGetQuery from "./useApiGetQuery";
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
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = (data) => {
    alert("로그인에 성공했습니다");
  };

  return useApiPostQuery("/api/auth/login", onSuccess, onError);
};

export const useLogoutPostApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = (data) => {
    alert("로그아웃에 성공했습니다");
  };

  return useApiPostQuery("/api/auth/logout", onSuccess, onError);
};

const filterAlcohol = (user) => {
  return user;
};

export const useUserDataGetApi = () => {
  return useApiGetQuery("getUserData", "/api/auth/user", filterAlcohol);
};
