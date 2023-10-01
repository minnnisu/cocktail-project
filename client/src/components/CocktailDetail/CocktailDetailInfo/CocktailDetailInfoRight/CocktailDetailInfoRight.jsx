import CocktailDetaiIInfoIngredient from "../CocktailDetaiIInfoIngredient/CocktailDetaiIInfoIngredient";
import CocktailDetailInfoItem from "../CocktailDetailInfoItem/CocktailDetailInfoItem";
import styles from "./CocktailDetailInfoRight.module.css";

function CocktailDetailInfoRight({
  name,
  tastes,
  garnishes,
  alcohols,
  nonAlcohols,
}) {
  const convertObjectToString = (array) => {
    return array.reduce((accumulator, currentValue, index) => {
      if (index === array.length - 1) {
        return accumulator + `${currentValue}`;
      }

      return accumulator + `${currentValue}, `;
    }, "");
  };

  return (
    <div className={styles.right}>
      <div className={styles.container}>
        <CocktailDetailInfoItem name={"이름"} value={name} />
        <CocktailDetailInfoItem
          name={"맛"}
          value={convertObjectToString(tastes)}
        />
        <CocktailDetailInfoItem
          name={"가나쉬"}
          value={convertObjectToString(garnishes)}
        />
        <CocktailDetaiIInfoIngredient
          alcohols={alcohols}
          nonAlcohols={nonAlcohols}
        />
      </div>
    </div>
  );
}

export default CocktailDetailInfoRight;
