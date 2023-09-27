import { useState } from "react";
import SubAlcoholList from "../SubAlcoholList/SubAlcoholList";
import styles from "../shared/Item.module.css";

function AlcoholItem({ alcohol, handleAlcoholClick }) {
  const [subAlcoholShow, setSubAlcoholShow] = useState(false);

  const handleSubAlcoholToggle = () => {
    setSubAlcoholShow((prev) => !prev);
  };

  return (
    <>
      {alcohol.subAlcohols && alcohol.subAlcohols.length > 0 ? (
        <>
          <div className={styles.item} onClick={handleSubAlcoholToggle}>
            {alcohol.name}
          </div>
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
          className={`${alcohol?.isSelect ? styles.active : ""} ${styles.item}`}
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
