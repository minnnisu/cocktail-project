import styles from "./CocktailItemInfo.module.css";
import CocktailItemInfoKey from "../CocktailItemInfoKey/CocktailItemInfoKey";
import CocktailItemInfoList from "../CocktailItemInfoList/CocktailItemInfoList";
import TasteItem from "../CocktailItemInfoItem/TasteItem/TasteItem";
import AlcoholItem from "../CocktailItemInfoItem/AlcoholItem/AlcoholItem";
import NonAlcoholItem from "../CocktailItemInfoItem/NonAlcoholItem/NonAlcoholItem";
import CocktailItemInfoTitle from "../CocktailItemInfoTitle/CocktailItemInfoTitle";

function CocktailItemInfo({
  id,
  name,
  tastes,
  alcohols,
  nonAlcohols,
  selectedAlcohol,
  selectedNonAlcohol,
}) {
  return (
    <div className={styles.cocktail_item_summary}>
      <CocktailItemInfoTitle id={id} title={name} />
      <div className={styles.container}>
        <CocktailItemInfoKey title={"맛"} />
        <CocktailItemInfoList array={tastes} ItemComponent={TasteItem} />
        <CocktailItemInfoKey title={"술"} />

        <CocktailItemInfoList
          array={alcohols}
          type={"alcohol"}
          ItemComponent={AlcoholItem}
          selectedAlcohol={selectedAlcohol}
        />
        <CocktailItemInfoKey title={"기타 재료"} />
        <CocktailItemInfoList
          array={nonAlcohols}
          type={"nonAlcohol"}
          ItemComponent={NonAlcoholItem}
          selectedNonAlcohol={selectedNonAlcohol}
        />
      </div>
    </div>
  );
}

export default CocktailItemInfo;
