import { clientUrl } from "../../../../apis/config/domain";
import styles from "./CocktailItemInfoTitle.module.css";

function CocktailItemInfoTitle({ id, title }) {
  const handleTitleClick = () => {
    window.open(`${clientUrl}/recipe/${id}`, "_blank");
  };

  return (
    <div className={styles.title_wrapper}>
      <span className={styles.title} onClick={handleTitleClick}>
        {title}
      </span>
    </div>
  );
}
export default CocktailItemInfoTitle;
