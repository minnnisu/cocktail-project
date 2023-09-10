import { useLogoutPostApi } from "../../../../../hooks/useAuthApi";
import style from "./LoginedMenu.module.css";
import { useUserDataGetApi } from "../../../../../hooks/useUserApi";

function LoginedMenu({ handleMenuChange }) {
  const { isLoading, isSuccess, isError, data } = useUserDataGetApi();
  const logoutMutation = useLogoutPostApi();

  const handleLogoutButtonClick = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <li className={style.username}>유저이름</li>
      <li className={style.mypage} onClick={() => handleMenuChange(3)}>
        마이페이지
      </li>
      <li className={style.logout} onClick={handleLogoutButtonClick}>
        로그아웃
      </li>
    </>
  );
}

export default LoginedMenu;
