import styles from "./SubAlcoholItem.module.css";

function SubAlcoholItem({ alcoholName, subAlcohol, handleAlcoholClick }) {
  return (
    <div
      className={`${subAlcohol?.isSelect ? styles.active : ""}`}
      onClick={() =>
        handleAlcoholClick({
          alcoholName: alcoholName,
          subAlcoholName: subAlcohol.name,
          cocktails: subAlcohol.cocktails,
        })
      }
    >
      {subAlcohol.name}
    </div>
  );
}

export default SubAlcoholItem;
