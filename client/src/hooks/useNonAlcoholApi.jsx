import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

const filterNonAlcohol = (alcohols) => {
  return alcohols;
};

export const useNonAlcoholGetApi = () => {
  return useApiGetQuery(
    "getNonAlcohol",
    "/api/alcohol-management/non-alcohol",
    filterNonAlcohol
  );
};

export const useNonAlcoholPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert("오류가 발생했습니다.");
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getNonAlcohol");
    alert("기타재료를 추가였습니다.");
  };

  return useApiPostQuery(
    "/api/alcohol-management/non-alcohol",
    onSuccess,
    onError
  );
};
