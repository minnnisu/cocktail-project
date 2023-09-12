import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo({ setSelectedMenu }) {
  const navigate = useNavigate();
  function handleLogoClick() {
    navigate("/");
  }

  return (
    <div className={styles.logo} onClick={handleLogoClick}>
      오늘의 한잔
    </div>
  );
}

export default Logo;
