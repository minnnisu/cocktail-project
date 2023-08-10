import { useQueryClient } from "react-query";
import useApiPostQuery from "./useApiPostQuery";

export const useCocktailGetApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert("오류가 발생했습니다.");
  };

  const onSuccess = (data) => {
    alert("칵테일을 추가였습니다.");
  };

  return useApiPostQuery("/cocktail", onSuccess, onError);
};
