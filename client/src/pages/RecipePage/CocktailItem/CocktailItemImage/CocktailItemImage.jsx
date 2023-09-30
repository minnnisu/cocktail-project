import { url } from "../../../../apis/config/domain";
import styles from "./CocktailItemImage.module.css";

function CocktailItemImage({ image_path }) {
  return <img className={styles.image} src={`${url}/${image_path}`} />;
}

export default CocktailItemImage;
