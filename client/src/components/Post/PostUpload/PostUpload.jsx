import PostUploadTitle from "./PostUploadTitle/PostUploadTitle";
import PostUploadContent from "./PostUploadContent/PostUploadContent";
import styles from "./PostUpload.module.css";
import PostUploadImage from "./PostUploadImage/PostUploadImage";
import Button from "../../UI/Button/Button";
import { useState } from "react";

function PostUpload({ id, user, hookFunc, type }) {
  const [newImages, setNewImages] = useState([]);

  const [data, setData, originalImages, setOriginalImages, handleDataSubmit] =
    hookFunc({ id, user, newImages });

  const handleDataChange = (e) => {
    console.log(e.target.name);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.post_upload}>
      <div className={styles.left}>
        <PostUploadTitle value={data.title} onChange={handleDataChange} />
        <PostUploadContent value={data.content} onChange={handleDataChange} />
        <div className={styles.button_container}>
          <Button onClickButton={handleDataSubmit}>
            {type === "upload" ? "업로드" : "수정하기"}
          </Button>
        </div>
      </div>
      <div className={styles.right}>
        <PostUploadImage
          originalImages={originalImages}
          setOriginalImages={setOriginalImages}
          newImages={newImages}
          setNewImages={setNewImages}
        />
      </div>
    </div>
  );
}

export default PostUpload;
