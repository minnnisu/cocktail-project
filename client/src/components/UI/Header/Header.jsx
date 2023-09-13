import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header_container}>
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
