import SubAlcoholItem from "../SubAlcoholItem/SubAlcoholItem";
import styles from "./SubAlcoholList.module.css";

function SubAlcoholList({ alcoholName, subAlcohols, handleAlcoholClick }) {
  return (
    <div className={styles.sub_alcohol_list}>
      {subAlcohols.map((subAlcohol, index) => (
        <SubAlcoholItem
          key={index}
          alcoholName={alcoholName}
          subAlcohol={subAlcohol}
          handleAlcoholClick={handleAlcoholClick}
        />
      ))}
    </div>
  );
}

export default SubAlcoholList;
