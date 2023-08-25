import style from "./RowLayout.module.css";

function RowLayout({ children }) {
  return <div className={style.scroll_container}>{children}</div>;
}

export default RowLayout;
