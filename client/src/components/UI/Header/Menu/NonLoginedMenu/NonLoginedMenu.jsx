import { useNavigate } from "react-router-dom";
import styles from "./NonLoginedMenu.module.css";

function NonLoginedMenu() {
  const navigate = useNavigate();
  return (
    <>
      <li className={styles.login} onClick={() => navigate("/login")}>
        로그인
      </li>
      <li className={styles.signup} onClick={() => navigate("/signup")}>
        회원가입
      </li>
    </>
  );
}

export default NonLoginedMenu;
