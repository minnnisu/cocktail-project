import { useAlcoholGetApi } from "../../hooks/useAlcoholApi";
import AlcohlolList from "../AlcoholViewer/AlcohlolList/AlcohlolList";

function AlcoholViewer() {
  const { isLoading, isSuccess, isError, data } = useAlcoholGetApi();
  return (
    <>
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
      {isError && <div>데이터를 불러오는 과정에서 오류가 발생하였습니다.</div>}
      {isSuccess && <AlcohlolList alcohols={data} />}
    </>
  );
}

export default AlcoholViewer;
