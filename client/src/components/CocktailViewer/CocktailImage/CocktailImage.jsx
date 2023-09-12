import Title from "../../UI/Title/Title";
import styles from "./CocktailImage.module.css";

function CocktailImage({ src }) {
  return (
    <>
      <div className={styles.title_container}>
        <Title size={4}>이미지</Title>
      </div>
      <img
        className={styles.cocktail_image}
        src={src}
        alt="칵테일 이미지"
      ></img>
    </>
  );
}

export default CocktailImage;
