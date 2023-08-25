import RowLayout from "../../../layouts/RowLayout/RowLayout";
import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import Card from "../../UI/Wrapper/Card/Card";
import style from "./AlcohlolList.module.css";
import SubAlcoholList from "./SubAlcoholList/SubAlcoholList";

function AlcohlolList({ alcohols }) {
  return (
    <>
      <div className={style.title_container}>
        <Title size={3}>술 목록</Title>
      </div>
      <RowLayout>
        {alcohols.map((alcohol, alcoholIndex) => (
          <div key={alcoholIndex} className={style.alcohol_container}>
            <Card>
              <div className={style.alcohol_inner}>
                <KeyValueItem name={"이름"} value={alcohol.name} />
                <KeyValueItem name={"도수"} value={alcohol.abv} />
                {alcohol.subAlcohols.length > 0 && (
                  <SubAlcoholList subAlcohols={alcohol.subAlcohols} />
                )}
              </div>
            </Card>
          </div>
        ))}
      </RowLayout>
    </>
  );
}

export default AlcohlolList;
