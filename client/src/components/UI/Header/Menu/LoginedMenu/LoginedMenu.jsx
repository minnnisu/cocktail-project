import { useLogoutPostApi } from "../../../../../hooks/useAuthApi";
import styles from "./LoginedMenu.module.css";
import { useUserDataGetApi } from "../../../../../hooks/useUserApi";

function LoginedMenu({ handleMenuChange, setIsLogined }) {
  const { isLoading, isSuccess, isError, data } = useUserDataGetApi();
  const logoutMutation = useLogoutPostApi();

  const handleLogoutButtonClick = () => {
    logoutMutation.mutate(null, {
      onSuccess: function () {
        setIsLogined(false);
      },
    });
  };

  return (
    <>
      {isSuccess && <li className={styles.username}>{data.username}</li>}
      <li className={styles.mypage} onClick={() => handleMenuChange(3)}>
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
