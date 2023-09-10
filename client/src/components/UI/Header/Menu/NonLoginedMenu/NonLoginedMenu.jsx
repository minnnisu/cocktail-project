import style from "./NonLoginedMenu.module.css";

function NonLoginedMenu({ handleMenuChange }) {
  return (
    <>
      <li className={style.login} onClick={() => handleMenuChange(4)}>
        로그인
      </li>
      <li className={style.signup} onClick={() => handleMenuChange(5)}>
        회원가입
      </li>
    </>
  );
}

export default NonLoginedMenu;
