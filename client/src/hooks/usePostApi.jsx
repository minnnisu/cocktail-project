import useApiGetQuery from "./useApiGetQuery";
import useApiPostQuery from "./useApiPostQuery";
import useApiPatchQuery from "./useApiPatchQuery";
import useApiDeleteQuery from "./useApiDeleteQuery";
import { QueryClient, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const filterPost = (alcohols) => {
  return alcohols;
};

function objectToQueryString(obj) {
  const queryString = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      queryString.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      );
    }
  }

  return `?${queryString.join("&")}`;
}

export const usePostGetApi = (postId, query) => {
  return useApiGetQuery(
    "getAlcohol",
    `/api/post/${postId ? postId : ""}${
      query ? objectToQueryString(query) : ""
    }`,
    filterPost
  );
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

export const usePostPatchApi = (postId) => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("게시물을 수정하였습니다.");
  };

  return useApiPatchQuery(`/api/post/${postId}`, onSuccess, onError);
};

export const usePostDeleteApi = (postId) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("게시물을 삭제하였습니다.");
    navigate("/post");
  };

  return useApiDeleteQuery(`/api/post/${postId}`, onSuccess, onError);
};

export const useCommentGetApi = (postId) => {
  return useApiGetQuery(
    "getAlcohol",
    `/api/post/${postId}/comment`,
    filterPost
  );
};

export const useCommentPostApi = (postId) => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("댓글을 등록하였습니다.");
  };

  return useApiPostQuery(`/api/post/${postId}/comment`, onSuccess, onError);
};

export const useCommentPatchApi = (postId, commentId) => {
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("댓글을 수정하였습니다.");
  };

  return useApiPatchQuery(
    `/api/post/${postId}/comment/${commentId}`,
    onSuccess,
    onError
  );
};

export const useCommentDeleteApi = (postId, commentId) => {
  const queryClient = useQueryClient();

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const onSuccess = () => {
    alert("댓글을 삭제하였습니다.");
  };

  return useApiDeleteQuery(
    `/api/post/${postId}/comment/${commentId}`,
    onSuccess,
    onError
  );
};
