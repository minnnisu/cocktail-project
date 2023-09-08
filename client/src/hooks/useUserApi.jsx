import useApiGetQuery from "./useApiGetQuery";

const filterUser = (user) => {
  return user;
};

export const useUserDataGetApi = () => {
  return useApiGetQuery("getUserData", "/api/user", filterUser);
};
