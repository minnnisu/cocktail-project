import axios from "axios";
import { useQuery } from "react-query";
const { serverUrl } = require("../apis/config/domain");

const fetchData = async (path) => {
  return axios.get(`${serverUrl}${path}`, {
    "Content-Type": "application/json",
    withCredentials: true,
  });
};

function useApiGetQuery(queryKey, path, filterData, options) {
  return useQuery(
    [queryKey, path],
    () => fetchData(path).then((res) => filterData(res.data)),
    options
  );
}

export default useApiGetQuery;
