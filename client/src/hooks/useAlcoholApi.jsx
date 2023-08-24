import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

const filterAlcohol = (alcohols) => {
  // return baseSpirits.map((baseSpirit) => {
  //   return baseSpirit.name;
  // });
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
    alert("오류가 발생했습니다.");
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getBaseSpirit");
    alert("술을 추가였습니다.");
  };

  return useApiPostQuery("/api/alcohol-management/alcohol", onSuccess, onError);
};
