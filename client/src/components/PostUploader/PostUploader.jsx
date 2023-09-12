import styles from "./PostUploader.module.css";

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
      <div>
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
        <Button onClickButton={handlePostButtonClick}>게시물 등록</Button>
      </div>
      <Images images={images} setImages={setImages} />
    </>
  );
}

export default PostUploader;
