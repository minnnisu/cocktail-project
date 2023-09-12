import styles from "./Buttons.module.css";
import Button from "../../../UI/Button/Button";

function Buttons({ ImageRef, setImage }) {
  const handleImageApppendButtonClick = () => {
    if (ImageRef.current) {
      ImageRef.current.click();
    }
  };

  const handleImageRemoveButtonClick = () => {
    setImage({
      image_file: null,
      preview_URL: null,
    });
  };

  return (
    <div className={styles.buttons_container}>
      <Button onClickButton={handleImageApppendButtonClick}>{"추가"}</Button>
      <Button
        backgroundColor={"red"}
        onClickButton={handleImageRemoveButtonClick}
      >
        {"삭제"}
      </Button>
    </div>
  );
}

export default Buttons;
