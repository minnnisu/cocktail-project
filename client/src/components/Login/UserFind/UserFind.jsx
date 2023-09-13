import styles from "./UserFind.module.css";

function UserFind() {
  return (
    <ul className={styles.find_container}>
      <li>비밀번호 찾기</li>
      <li>회원가입</li>
    </ul>
  );
}

export default UserFind;
