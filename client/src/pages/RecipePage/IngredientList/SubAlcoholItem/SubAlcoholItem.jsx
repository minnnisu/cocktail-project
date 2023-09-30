import styles from "../../shared/Item.module.css";

function SubAlcoholItem({ alcoholName, subAlcohol, handleAlcoholClick }) {
  return (
    <div
      className={`${subAlcohol.isSelect ? styles.active : ""} ${styles.item}`}
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
