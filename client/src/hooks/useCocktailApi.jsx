import { useQueryClient } from "react-query";
import useApiPostQuery from "./useApiPostQuery";
import useApiGetQuery from "./useApiGetQuery";

const filterCocktail = (alcohols) => {
  return alcohols;
};

export const useCocktailGetApi = (query = "") => {
  return useApiGetQuery(
    "getCocktail",
    `/api/alcohol-management/cocktail${query}`,
    filterCocktail
  );
};

export const useCocktailImageGetApi = (imageName) => {
  return useApiGetQuery(
    "getCocktailImage",
    `/api/alcohol-management/cocktail/image/${imageName}`,
    filterCocktail
  );
};

export const useCocktailPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert(error.response.data.message);
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
