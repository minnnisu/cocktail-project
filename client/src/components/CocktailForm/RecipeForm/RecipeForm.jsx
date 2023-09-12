import Textarea from "../../UI/Textarea/Textarea";
import Title from "../../UI/Title/Title";
import styles from "./RecipeForm.module.css";

function RecipeForm({ setRecipe }) {
  const handleCocktailRecipeChange = (value) => {
    setRecipe(value);
  };
  return (
    <>
      <Title size={4}>{"조주기법"}</Title>
      <div className={styles.text_area_container}>
        <Textarea onChangeTextarea={handleCocktailRecipeChange} />
      </div>
    </>
  );
}

export default RecipeForm;
