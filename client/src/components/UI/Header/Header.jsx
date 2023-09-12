import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";

function Header({ user, setUser }) {
  return (
    <div className={styles.header_container}>
      <Logo />
      <Menu user={user} setUser={setUser} />
    </div>
  );
}

export default Header;
