import CocktailItemImage from "./CocktailItemImage/CocktailItemImage";
import CocktailItemInfo from "./CocktailItemInfo/CocktailItemInfo";
import styles from "./CocktailItem.module.css";

function CocktailItem({ cocktail, selectedAlcohol, selectedNonAlcohol }) {
  return (
    <div className={styles.cocktail_item_wrapper}>
      <div className={styles.cocktail_item}>
        <CocktailItemImage image_path={cocktail.image_path} />
        <CocktailItemInfo
          id={cocktail._id}
          name={cocktail.name}
          tastes={cocktail.tastes}
          alcohols={cocktail.alcohols}
          nonAlcohols={cocktail.nonAlcohols}
          selectedAlcohol={selectedAlcohol}
          selectedNonAlcohol={selectedNonAlcohol}
        />
      </div>
    </div>
  );
}

export default CocktailItem;
