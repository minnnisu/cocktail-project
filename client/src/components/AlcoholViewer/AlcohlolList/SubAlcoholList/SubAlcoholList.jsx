import style from "./SubAlcoholList.module.css";
import Title from "../../../UI/Title/Title";
import KeyValueItem from "../../../UI/KeyValueItem/KeyValueItem";

function SubAlcoholList({ subAlcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={4}>하위 알코올</Title>
      </div>
      {subAlcohols.map((subAlcohol, subAlcoholIndex) => (
        <div key={subAlcoholIndex} className={style.sub_alcohol_container}>
          <KeyValueItem name={"이름"} value={subAlcohol.name} />
          <KeyValueItem name={"도수"} value={subAlcohol.abv} />
        </div>
      ))}
    </>
  );
}

export default SubAlcoholList;
