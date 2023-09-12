import styles from "./AlcoholViewerLayout.module.css";

function AlcoholViewerLayout({ children }) {
  return <div className={styles.alcohol_viewer_layout}>{children}</div>;
}

export default AlcoholViewerLayout;
