import WarningImage from "../../../assets/icon/warning.png";
import styles from "./Prepare.module.css";

function Prepare() {
  return (
    <div className={styles.prepare_container}>
      <img src={WarningImage} />
      <h3 className={styles.header}>페이지 준비중입니다.</h3>
      <div>현재 페이지를 준비하고 있으니 조금만 기다려주세요</div>
      <div>감사합니다.</div>
    </div>
  );
}

export default Prepare;
