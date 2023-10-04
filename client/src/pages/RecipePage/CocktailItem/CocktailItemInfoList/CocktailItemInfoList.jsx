function CocktailItemInfoList({
  array,
  type,
  ItemComponent,
  selectedAlcohol,
  selectedNonAlcohol,
}) {
  function isIncludeIngredient(item) {
    if (type === "alcohol") {
      if (item.subAlcoholName) {
        for (const alcohol of selectedAlcohol) {
          if (alcohol.subAlcoholName === item.subAlcoholName) {
            return true;
          }
        }
        return false;
      }

      for (const alcohol of selectedAlcohol) {
        if (alcohol.alcoholName === item.name) {
          return true;
        }
      }
      return false;
    }

    if (type === "nonAlcohol") {
      for (const nonAlcohol of selectedNonAlcohol) {
        if (nonAlcohol.nonAlcoholName === item.name) {
          return true;
        }
      }
      return false;
    }

    return false;
  }

  return (
    <>
      {array.map((item, index) => {
        const isInclude = isIncludeIngredient(item);
        return <ItemComponent key={index} item={item} isInclude={isInclude} />;
      })}
      {array.length % 2 === 1 && <span></span>}
    </>
  );
}

export default CocktailItemInfoList;
