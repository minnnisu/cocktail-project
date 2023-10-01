import CocktailDetailContainer from "../../components/CocktailDetail/CocktailDetailContainer/CocktailDetailContainer";
import { useCocktailGetApi } from "../../hooks/useCocktailApi";

function RandomPage() {
  const { data: cockail } = useCocktailGetApi("?type=random");
  console.log(cockail);

  return (
    <>
      {cockail && cockail.length > 0 && (
        <CocktailDetailContainer cockail={cockail[0]} />
      )}
    </>
  );
}

export default RandomPage;
