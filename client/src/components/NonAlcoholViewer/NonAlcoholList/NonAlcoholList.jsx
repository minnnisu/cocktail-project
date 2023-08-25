import RowLayout from "../../../layouts/RowLayout/RowLayout";
import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import Card from "../../UI/Wrapper/Card/Card";
import style from "./NonAlcoholList.module.css";

function NonAlcoholList({ nonAlcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={3}>기타재료 목록</Title>
      </div>
      <RowLayout>
        {nonAlcohols.map((nonAlcohol, nonAlcoholIndex) => (
          <div key={nonAlcoholIndex} className={style.non_alcohol_container}>
            <Card>
              <div className={style.non_alcohol_inner}>
                <KeyValueItem name={"이름"} value={nonAlcohol.name} />
              </div>
            </Card>
          </div>
        ))}
      </RowLayout>
    </>
  );
}

export default NonAlcoholList;
