import BaseSpiritTypeViewer from "./BaseSpiritTypeViewer/BaseSpiritTypeViewer";
import CocktailInfoViewer from "./CocktailInfoViewer/CocktailInfoViewer";
import BaseSpiritViewer from "./BaseSpiritViewer/BaseSpiritViewer";
import style from "./StoredAlcoholViewerPage.module.css";

function StoredAlcoholViewerPage() {
  return (
    <div className={style.viewer_container}>
      <CocktailInfoViewer />
      <BaseSpiritTypeViewer />
      <BaseSpiritViewer />
    </div>
  );
}

export default StoredAlcoholViewerPage;
