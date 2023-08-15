import BaseSpiritTypeViewer from "./BaseSpiritTypeViewer/BaseSpiritTypeViewer";
import CocktailInfoViewer from "./CocktailInfoViewer/CocktailInfoViewer";
import BaseSpiritViewer from "./BaseSpiritViewer/BaseSpiritViewer";
import style from "./StoredAlcoholViewerPage.module.css";
import AlcoholTypeSelect from "../../components/StoredAlcoholView/AlcoholTypeSelect/AlcoholTypeSelect";
import AlcoholListLayout from "../../layouts/StoredAlcoholViewerLayout/AlcoholListLayout/AlcoholListLayout";

function StoredAlcoholViewerPage() {
  return (
    <div className={style.viewer_container}>
      <AlcoholListLayout>
        <AlcoholTypeSelect />
      </AlcoholListLayout>
    </div>
  );
}

export default StoredAlcoholViewerPage;
