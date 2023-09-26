import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";
import useApiPutQuery from "./useApiPutQuery";

const filterAlcohol = (alcohols) => {
  return alcohols;
};

export const useAlcoholGetApi = (query, options) => {
  return useApiGetQuery(
    "getAlcohol",
    `/api/alcohol-management/alcohol${query ? query : ""}`,
    filterAlcohol,
    options
  );
};

export const useAlcoholPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getAlcohol");
    alert("술을 추가였습니다.");
  };

  return useApiPostQuery("/api/alcohol-management/alcohol", onSuccess, onError);
};

export const useAlcoholPutApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getAlcohol");
    alert("술을 업데이트 하였습니다.");
  };

  return useApiPutQuery("/api/alcohol-management/alcohol", onSuccess, onError);
};
