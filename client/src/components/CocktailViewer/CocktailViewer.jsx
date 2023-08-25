import { useCocktailGetApi } from "../../hooks/useCocktailApi";
import CocktailList from "./CocktailList/CocktailList";

function CocktailViewer() {
  const { isLoading, isSuccess, isError, data } = useCocktailGetApi();
  console.log(data);
  return (
    <>
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
      {isError && <div>데이터를 불러오는 과정에서 오류가 발생하였습니다.</div>}
      {isSuccess && <CocktailList cocktails={data} />}
    </>
  );
}

export default CocktailViewer;
