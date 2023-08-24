import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

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
