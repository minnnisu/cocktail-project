import styles from "./CocktailDetailInfo.module.css";
import CocktailDetailInfoLeft from "./CocktailDetailInfoLeft/CocktailDetailInfoLeft";
import CocktailDetailInfoRight from "./CocktailDetailInfoRight/CocktailDetailInfoRight";

function CocktailDetailInfo({
  image_path,
  name,
  tastes,
  garnishes,
  alcohols,
  nonAlcohols,
}) {
  return (
    <div className={styles.info_wrapper}>
      <CocktailDetailInfoLeft image_path={image_path} />
      <CocktailDetailInfoRight
        name={name}
        tastes={tastes}
        garnishes={garnishes}
        alcohols={alcohols}
        nonAlcohols={nonAlcohols}
      />
    </div>
  );
}

export default CocktailDetailInfo;
