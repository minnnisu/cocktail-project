import CocktailItemImage from "./CocktailItemImage/CocktailItemImage";
import CocktailItemSummary from "./CocktailItemSummary/CocktailItemSummary";
import styles from "./CocktailItem.module.css";

function CocktailItem({ cocktail }) {
  return (
    <div className={styles.cocktail_item_wrapper}>
      <div className={styles.cocktail_item}>
        <CocktailItemImage image_path={cocktail.image_path} />
        <CocktailItemSummary
          id={cocktail._id}
          name={cocktail.name}
          tastes={cocktail.tastes}
          alcohols={cocktail.alcohols}
          nonAlcohols={cocktail.nonAlcohols}
        />
      </div>
    </div>
  );
}

export default CocktailItem;
