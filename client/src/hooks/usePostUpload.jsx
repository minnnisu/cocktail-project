import { useState } from "react";
import { usePostPostApi } from "./usePostApi";

export const usePostUpload = ({ user, newImages }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [originalImages, setOriginalImages] = useState({
    remained: [],
    removed: [],
  });

  const postMutation = usePostPostApi();

  const handleDataSubmit = (e) => {
    if (!user) {
      return alert("로그인 해주세요");
    }

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({ title: data.title, content: data.content })
    );
    for (let i = 0; i < newImages.length; i++) {
      formData.append("images", newImages[i]);
    }

    postMutation.mutate(formData);
  };

  return [data, setData, originalImages, setOriginalImages, handleDataSubmit];
};
