import { useState } from "react";
import SubAlcoholList from "../SubAlcoholList/SubAlcoholList";
import styles from "./AlcoholItem.module.css";

function AlcoholItem({ alcohol, handleAlcoholClick }) {
  const [subAlcoholShow, setSubAlcoholShow] = useState(false);

  const handleSubAlcoholToggle = () => {
    setSubAlcoholShow((prev) => !prev);
  };

  return (
    <>
      {alcohol.subAlcohols && alcohol.subAlcohols.length > 0 ? (
        <>
          <div onClick={handleSubAlcoholToggle}>{alcohol.name}</div>
          {subAlcoholShow && (
            <SubAlcoholList
              alcoholName={alcohol.name}
              subAlcohols={alcohol.subAlcohols}
              handleAlcoholClick={handleAlcoholClick}
            />
          )}
        </>
      ) : (
        <div
          className={`${alcohol?.isSelect ? styles.active : ""}`}
          onClick={() => {
            handleAlcoholClick &&
              handleAlcoholClick({
                alcoholName: alcohol.name,
                cocktails: alcohol.cocktails,
              });
          }}
        >
          {alcohol.name}
        </div>
      )}
    </>
  );
}

export default AlcoholItem;
