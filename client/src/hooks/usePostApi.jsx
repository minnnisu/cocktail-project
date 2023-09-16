import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";
import useApiPatchQuery from "./useApiPatchQuery";

const filterPost = (alcohols) => {
  return alcohols;
};

export const usePostPostApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("게시물을 등록하였습니다.");
  };

  return useApiPostQuery("/api/post", onSuccess, onError);
};

export const usePostGetApi = (postId, query) => {
  return useApiGetQuery("getAlcohol", "/api/post", postId, query, filterPost);
};

export const usePostPatchApi = (postId) => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {};

  return useApiPatchQuery("/api/post", postId, onSuccess, onError);
};
