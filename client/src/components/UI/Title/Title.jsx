import styles from "./Title.module.css";

function Title({ size, children }) {
  const getTitleSize = () => {
    switch (size) {
      case 1:
        return 32;
      case 2:
        return 28;
      case 3:
        return 24;
      case 4:
        return 18;
      case 5:
        return 16;
      case 6:
        return 12;
      default:
        return 32;
    }
  };

  return (
    <div className={styles.title} style={{ fontSize: `${getTitleSize()}px` }}>
      {children}
    </div>
  );
}

export default Title;
