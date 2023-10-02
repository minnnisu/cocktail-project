import styles from "./Header.module.css";

function Header({ menu, handleMenuClick }) {
  return (
    <ul className={styles.header}>
      <li
        className={`${styles.item} ${menu === 0 ? styles.active : ""}`}
        onClick={() => handleMenuClick(0)}
      >
        술 재료
      </li>
      <li
        className={`${styles.item} ${menu === 1 ? styles.active : ""}`}
        onClick={() => handleMenuClick(1)}
      >
        기타 재료
      </li>
    </ul>
  );
}

export default Header;
