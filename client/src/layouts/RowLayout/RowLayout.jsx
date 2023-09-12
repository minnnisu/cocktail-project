import styles from "./RowLayout.module.css";

function RowLayout({ children }) {
  return <div className={styles.scroll_container}>{children}</div>;
}

export default RowLayout;
