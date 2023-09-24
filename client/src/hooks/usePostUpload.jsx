import { useState } from "react";
import { usePostPostApi } from "./usePostApi";
import { useNavigate } from "react-router-dom";

export const usePostUpload = ({ user, newImages }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [originalImages, setOriginalImages] = useState({
    remained: [],
    removed: [],
  });

  const navigate = useNavigate();

  const postMutation = usePostPostApi();

  const handlePostSubmit = (e) => {
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

    postMutation.mutate(formData, {
      onSuccess: function () {
        navigate("/post");
      },
    });
  };

  return { data, setData, originalImages, setOriginalImages, handlePostSubmit };
};
