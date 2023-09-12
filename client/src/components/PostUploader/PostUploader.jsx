import { useState } from "react";
import styles from "./PostUploader.module.css";
import { usePostPostApi } from "../../hooks/usePostApi";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import Button from "../../components/UI/Button/Button";
import Images from "../../components/UI/Image/Imges";
import Outer from "../../components/UI/Outer/Outer";

function PostUploader(params) {
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
    <>
      <Outer title={"게시물 등록"}>
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
      </Outer>
    </>
  );
}

export default PostUploader;
