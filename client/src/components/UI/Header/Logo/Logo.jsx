import styles from "./Logo.module.css";

function Logo({ setSelectedMenu }) {
  return (
    <div className={styles.logo} onClick={() => setSelectedMenu(1)}>
      오늘의 한잔
    </div>
  );
}

export default Logo;
