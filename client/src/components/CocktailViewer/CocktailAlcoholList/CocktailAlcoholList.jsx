import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import style from "./CocktailAlcoholList.module.css";

function CocktailAlcoholList({ alcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={4}>술</Title>
      </div>
      <div className={style.alcohols_container}>
        {alcohols.map((alcohol, alcoholIndex) => (
          <div key={alcoholIndex} className={style.alcohol_container}>
            <KeyValueItem name={"이름"} value={alcohol.name} />
            {alcohol.subAlcoholName && (
              <KeyValueItem
                name={"하위 알코올 이름"}
                value={alcohol.subAlcoholName}
              />
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
