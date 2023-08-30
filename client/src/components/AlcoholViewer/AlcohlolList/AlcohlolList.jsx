import { useState } from "react";
import RowLayout from "../../../layouts/RowLayout/RowLayout";
import AbvEditor from "../../AlcoholEditor/AbvEditor";
import SubAlcoholEditor from "../../AlcoholEditor/SubAlcoholEditor";
import Button from "../../UI/Button/Button";
import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import Card from "../../UI/Wrapper/Card/Card";
import style from "./AlcohlolList.module.css";
import SubAlcoholList from "./SubAlcoholList/SubAlcoholList";

function AlcohlolList({ alcohols }) {
  const [showAbvEditor, setAbvEditorShow] = useState(false);
  const [showSubAlcoholEditor, setSubAlcoholEditorShow] = useState(false);
  const [alcoholID, setAlcoholID] = useState(null);

  return (
    <>
      <AbvEditor
        show={showAbvEditor}
        setShow={setAbvEditorShow}
        id={alcoholID}
      />
      <SubAlcoholEditor
        show={showSubAlcoholEditor}
        setShow={setSubAlcoholEditorShow}
        id={alcoholID}
      />
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
                <div className={style.button_container}>
                  {alcohol.abv ? (
                    <Button
                      onClickButton={() => {
                        setAbvEditorShow(true);
                        setAlcoholID(alcohol._id);
                      }}
                    >
                      수정
                    </Button>
                  ) : (
                    <Button
                      onClickButton={() => {
                        setSubAlcoholEditorShow(true);
                        setAlcoholID(alcohol._id);
                      }}
                    >
                      수정
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </RowLayout>
    </>
  );
}

export default AlcohlolList;
