import useApiGetQuery from "./useApiGetQuery";
import useApiDeleteQuery from "./useApiDeleteQuery";

const filterUser = (user) => {
  return user;
};

export const useUserDataGetApi = () => {
  return useApiGetQuery("getUserData", "/api/user", filterUser);
};

export const useUserDataDeleteApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("회원 탈퇴 되었습니다");
  };

  return useApiDeleteQuery("/api/user", onSuccess, onError);
};
