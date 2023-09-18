import styles from "./PostShowLayout.module.css";

function PostShowLayout({ children }) {
  return <div className={styles.post_show_layout}>{children}</div>;
}

export default PostShowLayout;
