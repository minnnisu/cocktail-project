import { useState } from "react";
import styles from "./PostUploader.module.css";
import { usePostPostApi } from "../../../hooks/usePostApi";
import Outer from "../../UI/Outer/Outer";
import Input from "../../UI/Input/Input";
import Textarea from "../../UI/Textarea/Textarea";
import Images from "../../UI/Image/Images";
import Button from "../../UI/Button/Button";
import PostHeader from "../PostHeader/PostHeader";

function PostUploader() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const postMutation = usePostPostApi();

  const handlePostButtonClick = () => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ title, content }));
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    postMutation.mutate(formData);
  };
  return (
    <div>
      <PostHeader />
      <div className={styles.title_container}>
        <Input
          title={"제목"}
          name={"title"}
          value={title}
          onChangeValue={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <Textarea onChangeTextarea={setContent} />
      </div>
      <Images images={images} setImages={setImages} />
      <Button onClickButton={handlePostButtonClick}>게시물 등록</Button>
    </div>
  );
}

export default PostUploader;
