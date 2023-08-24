import { useQueryClient } from "react-query";
import useApiPostQuery from "./useApiPostQuery";

export const useCocktailPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert("오류가 발생했습니다.");
  };

  const onSuccess = (data) => {
    alert("칵테일을 추가였습니다.");
  };

  return useApiPostQuery(
    "/api/alcohol-management/cocktail",
    onSuccess,
    onError
  );
};

export const useCocktailImagePostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert("이미지를 업로드하는 과정에서 오류가 발생했습니다.");
  };

  const onSuccess = () => {};

  return useApiPostQuery(
    "/api/alcohol-management/cocktail/image",
    onSuccess,
    onError
  );
};
