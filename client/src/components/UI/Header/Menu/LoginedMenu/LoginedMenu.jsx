import { useLogoutPostApi } from "../../../../../hooks/useAuthApi";
import styles from "./LoginedMenu.module.css";
import { useNavigate } from "react-router-dom";

function LoginedMenu({ user, setUser }) {
  const navigate = useNavigate();
  const logoutMutation = useLogoutPostApi();

  const handleLogoutButtonClick = () => {
    logoutMutation.mutate(null, {
      onSuccess: function () {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      },
    });
  };

  const handleMypageButtonClick = () => {
    navigate("/mypage");
  };

  return (
    <>
      <li className={styles.username}>{user}</li>
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
