import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import styles from "./CocktailAlcoholList.module.css";

function CocktailAlcoholList({ alcohols }) {
  return (
    <>
      <div className={styles.title_container}>
        <Title size={4}>술</Title>
      </div>
      <div className={styles.alcohols_container}>
        {alcohols.map((alcohol, alcoholIndex) => (
          <div key={alcoholIndex} className={styles.alcohol_container}>
            {alcohol.subAlcoholName ? (
              <KeyValueItem
                name={"이름"}
                value={`${alcohol.name} (${alcohol.subAlcoholName})`}
              />
            ) : (
              <KeyValueItem name={"이름"} value={alcohol.name} />
            )}
            {alcohol.volume ? (
              <KeyValueItem
                name={"용량"}
                value={`${alcohol.volume} ${alcohol.unit}`}
              />
            ) : (
              <KeyValueItem name={"용량"} value={`${alcohol.unit}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default CocktailAlcoholList;
