import styles from "../shared/Item.module.css";

function AlcoholItem({ alcohol, setSubAlcoholComponent, handleAlcoholClick }) {
  const handleSubAlcoholToggle = () => {
    setSubAlcoholComponent((prev) => {
      if (prev.data.alcoholName === alcohol.name) {
        if (prev.state) {
          return {
            state: false,
            data: { alcoholName: "", subAlcohols: [] },
          };
        }

        return {
          state: true,
          data: {
            alcoholName: alcohol.name,
            subAlcohols: alcohol.subAlcohols,
          },
        };
      }

      return {
        state: true,
        data: {
          alcoholName: alcohol.name,
          subAlcohols: alcohol.subAlcohols,
        },
      };
    });
  };

  return (
    <>
      {alcohol.subAlcohols && alcohol.subAlcohols.length > 0 ? (
        <>
          <div className={styles.item} onClick={handleSubAlcoholToggle}>
            {alcohol.name}
          </div>
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
