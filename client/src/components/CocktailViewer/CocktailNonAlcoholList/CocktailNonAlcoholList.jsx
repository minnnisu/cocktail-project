import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import styles from "./CocktailNonAlcoholList.module.css";

function CocktailNonAlcoholList({ nonAlcohols }) {
  return (
    <>
      <div className={styles.title_container}>
        <Title size={4}>기타 재료</Title>
      </div>
      <div className={styles.non_alcohols_container}>
        {nonAlcohols.map((nonAlcohol, nonAlcoholIndex) => (
          <div key={nonAlcoholIndex} className={styles.non_alcohol_container}>
            <KeyValueItem name={"이름"} value={nonAlcohol.name} />
            {nonAlcohol.volume ? (
              <KeyValueItem
                name={"용량"}
                value={`${nonAlcohol.volume} ${nonAlcohol.unit}`}
              />
            ) : (
              <KeyValueItem name={"용량"} value={`${nonAlcohol.unit}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default CocktailNonAlcoholList;
