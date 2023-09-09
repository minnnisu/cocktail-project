import useApiPostQuery from "./useApiPostQuery";

export const usePostPostApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  return useApiPostQuery("/api/post/", null, onError);
};

export const usePostImagesPostApi = () => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("게시물을 등록하였습니다.");
  };

  return useApiPostQuery("/api/post/image", onSuccess, onError);
};
