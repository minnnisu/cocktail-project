import style from "./AlcoholTypeSelectLayout.module.css";

function AlcoholTypeSelectLayout({ children }) {
  return <div className={style.alcohol_type_select_layout}>{children}</div>;
}

export default AlcoholTypeSelectLayout;
