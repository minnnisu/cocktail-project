import axios from "axios";
import { useQuery } from "react-query";
const { url } = require("../../src/apis/config/domain");

const fetchData = async (path) => {
  console.log("실행");
  return axios.get(`${url}${path}`); // 이부분은 api 폴더 내 모듈로 수정
};

function useApiGetQuery(queryKey, path, filterData) {
  return useQuery([queryKey, path], () =>
    fetchData(path).then((res) => filterData(res.data))
  );
}

export default useApiGetQuery;
