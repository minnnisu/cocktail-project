import styles from "./LoginedMenu.module.css";
import { useNavigate } from "react-router-dom";
import { useAuthHandler } from "../../../../../hooks/useAuthHandler";

function LoginedMenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuthHandler();
  const handleLogoutButtonClick = () => {
    logout();
  };

  const handleMypageButtonClick = () => {
    navigate("/mypage");
  };

  return (
    <>
      <li onClick={handleMypageButtonClick} className={styles.username}>
        {user}
      </li>
      <li className={styles.logout} onClick={handleLogoutButtonClick}>
        로그아웃
      </li>
    </>
  );
}

export default LoginedMenu;
