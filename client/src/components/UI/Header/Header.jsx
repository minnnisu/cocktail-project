import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";

function Header({ setSelectedMenu, isLogined, setIsLogined }) {
  return (
    <div className={styles.header_container}>
      <Logo setSelectedMenu={setSelectedMenu} />
      <Menu
        isLogined={isLogined}
        setIsLogined={setIsLogined}
        setSelectedMenu={setSelectedMenu}
      />
    </div>
  );
}

export default Header;
