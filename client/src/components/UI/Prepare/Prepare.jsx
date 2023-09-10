import WarningImage from "../../../assets/icon/warning.png";
import style from "./Prepare.module.css";

function Prepare() {
  return (
    <div className={style.prepare_container}>
      <img src={WarningImage} />
      <h3 className={style.header}>페이지 준비중</h3>
      <p>현재 페이지를 제작하고 있습니다.</p>
    </div>
  );
}

export default Prepare;
