import { useNonAlcoholGetApi } from "../../hooks/useNonAlcoholApi";
import NonAlcoholList from "../NonAlcoholViewer/NonAlcoholList/NonAlcoholList";

function NonAlcoholViewer() {
  const { isLoading, isSuccess, isError, data } = useNonAlcoholGetApi();
  return (
    <>
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
      {isError && <div>데이터를 불러오는 과정에서 오류가 발생하였습니다.</div>}
      {isSuccess && <NonAlcoholList nonAlcohols={data} />}
    </>
  );
}

export default NonAlcoholViewer;
