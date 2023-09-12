import styles from "./NonLoginedMenu.module.css";

function NonLoginedMenu({ handleMenuChange }) {
  return (
    <>
      <li className={styles.login} onClick={() => handleMenuChange(4)}>
        로그인
      </li>
      <li className={styles.signup} onClick={() => handleMenuChange(5)}>
        회원가입
      </li>
    </>
  );
}

export default NonLoginedMenu;
