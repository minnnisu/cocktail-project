import styles from "./NonAlcoholItem.module.css";

function NonAlcoholItem({ nonAlcohol, handleNonAlcoholClick }) {
  return (
    <>
      <div
        className={`${nonAlcohol?.isSelect ? styles.active : ""}`}
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
