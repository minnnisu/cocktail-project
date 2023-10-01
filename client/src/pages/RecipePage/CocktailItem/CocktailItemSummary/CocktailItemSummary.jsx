import { useNavigate } from "react-router-dom";
import styles from "./CocktailItemSummary.module.css";
import { clientUrl, serverUrl } from "../../../../apis/config/domain";

function CocktailItemSummary({ id, name, tastes, alcohols, nonAlcohols }) {
  const navigate = useNavigate();
  const handleTitleClick = () => {
    // navigate(`${id}`);
    window.open(`${clientUrl}/recipe/${id}`, "_blank");
  };
  return (
    <div className={styles.cocktail_item_summary}>
      <span className={styles.title} size={4} onClick={handleTitleClick}>
        {name}
      </span>
      <div className={styles.tastes_list_wrapper}>
        <span className={styles.sub_title} size={5}>
          맛
        </span>
        <div className={styles.tastes_list}>
          {tastes.map((taste, index) => (
            <div className={styles.taste_item} key={index}>
              {taste}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ingredients_list_wrapper}>
        <span className={styles.sub_title} size={5}>
          재료
        </span>
        <div className={styles.ingredients_list}>
          {alcohols.map((alcohol, index) => (
            <div className={styles.ingredient_item} key={index}>{`${
              alcohol.name
            }${
              alcohol.subAlcoholName ? `(${alcohol.subAlcoholName})` : ""
            }`}</div>
          ))}
          {nonAlcohols.map((nonAlcohol, index) => (
            <div className={styles.ingredient_item} key={index}>
              {nonAlcohol.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CocktailItemSummary;
