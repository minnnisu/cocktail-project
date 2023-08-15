import style from "./HeaderLayout.module.css";

function HeaderLayout() {
  return (
    <div className={style.header_layout}>
      <div className={left}></div>
      <div className={right}></div>
    </div>
  );
}

export default HeaderLayout;
