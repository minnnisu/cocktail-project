import { serverUrl } from "../../../../apis/config/domain";
import styles from "./CocktailDetailInfoLeft.module.css";

function CocktailDetailInfoLeft({ image_path }) {
  return (
    <div className={styles.left}>
      <img src={`${serverUrl}/${image_path}`} alt="칵테일 사진"></img>
    </div>
  );
}

export default CocktailDetailInfoLeft;
