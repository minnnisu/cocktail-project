import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

const filterAlcohol = (alcohols) => {
  return alcohols;
};

export const useAlcoholGetApi = () => {
  return useApiGetQuery(
    "getAlcohol",
    "/api/alcohol-management/alcohol",
    filterAlcohol
  );
};

export const useAlcoholPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getBaseSpirit");
    alert("술을 추가였습니다.");
  };

  return useApiPostQuery("/api/alcohol-management/alcohol", onSuccess, onError);
};
