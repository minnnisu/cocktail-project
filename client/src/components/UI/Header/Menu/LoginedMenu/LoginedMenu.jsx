import { useLogoutPostApi } from "../../../../../hooks/useAuthApi";
import styles from "./LoginedMenu.module.css";
import { useUserDataGetApi } from "../../../../../hooks/useUserApi";
import { useNavigate } from "react-router-dom";

function LoginedMenu({ user, setUser }) {
  const navigate = useNavigate();

  const logoutMutation = useLogoutPostApi();
  const { isLoading, isSuccess, isError, data } = useUserDataGetApi();
  if (isError) {
    setUser(null);
  }

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
      {isSuccess && <li className={styles.username}>{user}</li>}
      <li className={styles.mypage} onClick={handleMypageButtonClick}>
        마이페이지
      </li>
      <li
        className={styles.logout}
        onClick={handleLogoutButtonClick}
        setIsLogined={false}
      >
        로그아웃
      </li>
    </>
  );
}

export default LoginedMenu;
