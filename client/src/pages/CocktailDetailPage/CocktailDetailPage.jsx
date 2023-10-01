import { useParams } from "react-router-dom";
import { useCocktailGetApi } from "../../hooks/useCocktailApi";
import CocktailDetailContainer from "../../components/CocktailDetail/CocktailDetailContainer/CocktailDetailContainer";

function CocktailDetailPage() {
  const { id } = useParams();
  const { data: cockail } = useCocktailGetApi(`?id=${id}`);
  console.log(cockail);

  return (
    <>
      {cockail && cockail.length > 0 && (
        <CocktailDetailContainer cockail={cockail[0]} />
      )}
    </>
  );
}

export default CocktailDetailPage;
