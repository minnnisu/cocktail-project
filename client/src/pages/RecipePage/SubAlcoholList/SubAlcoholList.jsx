import SubAlcoholItem from "../SubAlcoholItem/SubAlcoholItem";

function SubAlcoholList({ alcoholName, subAlcohols, handleAlcoholClick }) {
  return (
    <>
      {subAlcohols.map((subAlcohol, index) => (
        <SubAlcoholItem
          key={index}
          alcoholName={alcoholName}
          subAlcohol={subAlcohol}
          handleAlcoholClick={handleAlcoholClick}
        />
      ))}
    </>
  );
}

export default SubAlcoholList;
