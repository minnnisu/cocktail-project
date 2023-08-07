import BaseSpiritTypeViewer from "./BaseSpiritTypeViewer/BaseSpiritTypeViewer";
import CocktailInfoViewer from "./CocktailInfoViewer/CocktailInfoViewer";
import BaseSpiritViewer from "./BaseSpiritViewer/BaseSpiritViewer";
import style from "./Viewer.module.css";

function Viewer({}) {
  return (
    <div className={style.viewer_container}>
      <CocktailInfoViewer />
      <BaseSpiritTypeViewer />
      <BaseSpiritViewer />
    </div>
  );
}

export default Viewer;
