import axios from "axios";
import { useQuery } from "react-query";
const { url } = require("../apis/config/domain");

const fetchData = async (path) => {
  return axios.get(`${url}${path}`, {
    "Content-Type": "application/json",
    withCredentials: true,
  });
};

function useApiGetQuery(queryKey, path, filterData) {
  return useQuery([queryKey, path], () =>
    fetchData(path).then((res) => filterData(res.data))
  );
}

export default useApiGetQuery;
