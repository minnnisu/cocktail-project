import style from "./AlcoholAppendContainerLayout.module.css";

function CocktailAppendContainerLayout({ children }) {
  return <div className={style.cocktail_append_from_container}>{children}</div>;
}
export default CocktailAppendContainerLayout;
