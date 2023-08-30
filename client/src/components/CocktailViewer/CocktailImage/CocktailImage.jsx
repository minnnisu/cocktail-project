import Title from "../../UI/Title/Title";
import style from "./CocktailImage.module.css";

function CocktailImage({ src }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={4}>이미지</Title>
      </div>
      <img className={style.cocktail_image} src={src} alt="칵테일 이미지"></img>
    </>
  );
}

export default CocktailImage;
