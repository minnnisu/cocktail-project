import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

const filterNonAlcohol = (alcohols) => {
  return alcohols;
};

export const useNonAlcoholGetApi = (query, options) => {
  return useApiGetQuery(
    "getNonAlcohol",
    `/api/alcohol-management/non-alcohol${query ? query : ""}`,
    filterNonAlcohol,
    options
  );
};

export const useNonAlcoholPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert(error.response.data.message);
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
