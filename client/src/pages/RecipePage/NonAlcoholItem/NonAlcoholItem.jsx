import styles from "../shared/Item.module.css";

function NonAlcoholItem({ nonAlcohol, handleNonAlcoholClick }) {
  return (
    <>
      <div
        className={`${nonAlcohol?.isSelect ? styles.active : ""} ${
          styles.item
        }`}
        onClick={() => {
          handleNonAlcoholClick({
            nonAlcoholName: nonAlcohol.name,
            cocktails: nonAlcohol.cocktails,
          });
        }}
      >
        {nonAlcohol.name}
      </div>
    </>
  );
}

export default NonAlcoholItem;
