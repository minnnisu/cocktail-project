import { useQueryClient } from "react-query";
import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";

const filterBaseSpiritTypeName = (baseSpiritTypes) => {
  return baseSpiritTypes.map((baseSpiritType, index) => {
    return baseSpiritType.name;
  });
};

export const useBaseSpiritTypeGetApi = () => {
  return useApiGetQuery(
    "getBaseSpiritType",
    "/base-spirit-type",
    filterBaseSpiritTypeName
  );
};

export const useBaseSpiritTypePostApi = () => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    if (error.response.status === 403) {
      alert("이미 존재하는 기주입니다.");
    } else {
      alert("오류가 발생했습니다.");
    }
  };

  const onSuccess = (data) => {
    queryClient.invalidateQueries("getBaseSpiritType");
    alert("기주를 추가하였습니다.");
  };

  return useApiPostQuery("/base-spirit-type", onSuccess, onError);
};
