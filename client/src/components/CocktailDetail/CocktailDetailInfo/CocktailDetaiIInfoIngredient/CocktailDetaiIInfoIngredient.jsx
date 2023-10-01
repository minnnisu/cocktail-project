import styles from "./CocktailDetaiIInfoIngredient.module.css";

function CocktailDetaiIInfoIngredient({ alcohols, nonAlcohols }) {
  return (
    <>
      <div className={styles.title}>재료 및 용량</div>
      <div></div>
      <>
        {alcohols.map((alcohol, index) => (
          <>
            <div className={styles.name}>{alcohol.name}</div>
            <div className={styles.amount} key={index}>{`${
              alcohol.volume ? alcohol.volume : ""
            }${alcohol.unit}`}</div>
          </>
        ))}
        {nonAlcohols.map((nonAlcohol, index) => (
          <>
            <div className={styles.name}>{nonAlcohol.name}</div>
            <div className={styles.amount} key={index}>{`${
              nonAlcohol.volume ? nonAlcohol.volume : ""
            }${nonAlcohol.unit}`}</div>
          </>
        ))}
      </>
    </>
  );
}

export default CocktailDetaiIInfoIngredient;
