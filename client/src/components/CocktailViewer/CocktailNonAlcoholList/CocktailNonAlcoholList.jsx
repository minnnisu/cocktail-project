import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import style from "./CocktailNonAlcoholList.module.css";

function CocktailNonAlcoholList({ nonAlcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={4}>기타 재료</Title>
      </div>
      <div className={style.non_alcohols_container}>
        {nonAlcohols.map((nonAlcohol, nonAlcoholIndex) => (
          <div key={nonAlcoholIndex} className={style.non_alcohol_container}>
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
