import useApiPostQuery from "./useApiPostQuery";

export const usePostPostApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("게시물을 등록하였습니다.");
  };

  return useApiPostQuery("/api/post/", onSuccess, onError);
};
