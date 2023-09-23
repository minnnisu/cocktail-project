import { useEffect, useState } from "react";
import { usePostGetApi, usePostPatchApi } from "./usePostApi";

export const usePostModify = ({ id, user, newImages }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [originalImages, setOriginalImages] = useState({
    remained: [],
    removed: [],
  });

  const postPatchMutation = usePostPatchApi(id);
  const { data: prevData } = usePostGetApi(id);

  useEffect(() => {
    if (prevData) {
      setData({
        title: prevData[0].title,
        content: prevData[0].content,
      });

      setOriginalImages((prev) => ({ ...prev, remained: prevData[0].images }));
    }
  }, [prevData]);

  const handleDataSubmit = (e) => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    if (user !== prevData[0].author.id) {
      return alert("작성자만 수정가능합니다");
    }

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        title: data.title,
        content: data.content,
        imageRemoveTarget: originalImages.removed,
      })
    );
    for (let i = 0; i < newImages.length; i++) {
      formData.append("images", newImages[i]);
    }

    postPatchMutation.mutate(formData);
  };

  return [data, setData, originalImages, setOriginalImages, handleDataSubmit];
};
