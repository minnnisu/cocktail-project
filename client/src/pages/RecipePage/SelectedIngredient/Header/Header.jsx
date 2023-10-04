import styles from "./Header.module.css";
import Left from "./Left/Left";
import Right from "./Right/Right";

function Header({
  selectedAlcohol,
  selectedNonAlcohol,
  setCocktailQueryParameter,
}) {
  return (
    <div className={styles.header}>
      <Left />
      <Right
        selectedAlcohol={selectedAlcohol}
        selectedNonAlcohol={selectedNonAlcohol}
        setCocktailQueryParameter={setCocktailQueryParameter}
      />
    </div>
  );
}

export default Header;
