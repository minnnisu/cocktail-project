import { useState } from "react";
import RowLayout from "../../../layouts/RowLayout/RowLayout";
import AbvEditor from "../../AlcoholEditor/AbvEditor";
import SubAlcoholEditor from "../../AlcoholEditor/SubAlcoholEditor";
import Button from "../../UI/Button/Button";
import KeyValueItem from "../../UI/KeyValueItem/KeyValueItem";
import Title from "../../UI/Title/Title";
import style from "./AlcohlolList.module.css";
import SubAlcoholList from "./SubAlcoholList/SubAlcoholList";
import IngredientCocktailMap from "../../IngredientCocktailMap/IngredientCocktailMap";
import Outer from "../../../layouts/AlcoholAppendFormLayout/Outer";

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
          <Outer key={alcoholIndex} title={alcohol.name} size={4}>
            {alcohol.subAlcohols.length < 1 ? (
              <div className={style.alcohol_container}>
                <KeyValueItem name={"도수"} value={alcohol.abv} />
                <IngredientCocktailMap cocktails={alcohol.cocktails} />
              </div>
            ) : (
              <SubAlcoholList subAlcohols={alcohol.subAlcohols} />
            )}
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
          </Outer>
        ))}
      </RowLayout>
    </>
  );
}

export default AlcohlolList;
