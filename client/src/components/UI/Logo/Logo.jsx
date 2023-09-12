import styles from "./Logo.module.css";

function Logo({ size = "big" }) {
  function getSize() {
    switch (size) {
      case "big":
        return "48px";
      case "medium":
        return "32px";
      case "small":
        return "24px";
      default:
        return "24px";
    }
  }

  return (
    <div className={styles.logo_container} styles={{ fontSize: getSize() }}>
      오늘의 한잔
    </div>
  );
}

export default Logo;
