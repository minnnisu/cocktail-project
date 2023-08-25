import style from "./AlcoholViewerLayout.module.css";

function AlcoholViewerLayout({ children }) {
  return <div className={style.alcohol_viewer_layout}>{children}</div>;
}

export default AlcoholViewerLayout;
