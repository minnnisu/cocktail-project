import { useContext } from "react";
import { useLogoutPostApi } from "../../../../../hooks/useAuthApi";
import styles from "./LoginedMenu.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthContext";

function LoginedMenu() {
  const navigate = useNavigate();
  const logoutMutation = useLogoutPostApi();
  const auth = useContext(AuthContext);

  const handleLogoutButtonClick = () => {
    logoutMutation.mutate(null, {
      onSuccess: function () {
        localStorage.removeItem("user");
        auth.logout();
        navigate("/");
      },
    });
  };

  const handleMypageButtonClick = () => {
    navigate("/mypage");
  };

  return (
    <>
      <li className={styles.username}>{auth.user}</li>
      <li className={styles.mypage} onClick={handleMypageButtonClick}>
        마이페이지
      </li>
      <li className={styles.logout} onClick={handleLogoutButtonClick}>
        로그아웃
      </li>
    </>
  );
}

export default LoginedMenu;
