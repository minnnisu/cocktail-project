function CocktailItemInfoList({ array, ItemComponent }) {
  return (
    <>
      {array.map((item, index) => (
        <ItemComponent key={index} item={item} />
      ))}
      {array.length % 2 === 1 && <span></span>}
    </>
  );
}

export default CocktailItemInfoList;
