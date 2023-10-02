import styles from "./Header.module.css";
import Button from "../../../../components/UI/Button/Button";

function Header({ handleSearchButtonClick }) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>선택된 재료</div>
      <Button onClickButton={handleSearchButtonClick}>검색</Button>
    </div>
  );
}

export default Header;
