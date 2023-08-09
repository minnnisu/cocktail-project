import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

const filterBaseSpiritName = (baseSpirits) => {
  return baseSpirits.map((baseSpirit) => {
    return baseSpirit.name;
  });
};

export const useBaseSpiritGetApi = () => {
  return useApiGetQuery("getBaseSpirit", "/base-spirit", filterBaseSpiritName);
};

export const useBaseSpiritPostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert("오류가 발생했습니다.");
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getBaseSpirit");
    alert("술을 추가였습니다.");
  };

  return useApiPostQuery("/base-spirit", onSuccess, onError);
};
