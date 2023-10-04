import { useCocktailGetApi } from "../../../hooks/useCocktailApi";
import CocktailItem from "../CocktailItem/CocktailItem";
import styles from "./CocktailList.module.css";

function CocktailList({
  selectedAlcohol,
  selectedNonAlcohol,
  cocktailQueryParameter,
}) {
  const { data: cocktails } = useCocktailGetApi(
    `?cocktails=${cocktailQueryParameter}`
  );

  return (
    <div className={styles.cocktail_list}>
      {cocktails &&
        cocktails.map((cocktail, index) => (
          <CocktailItem
            key={index}
            cocktail={cocktail}
            selectedAlcohol={selectedAlcohol}
            selectedNonAlcohol={selectedNonAlcohol}
          />
        ))}
    </div>
  );
}

export default CocktailList;
