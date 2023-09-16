import axios from "axios";
import { useQuery } from "react-query";
const { url } = require("../../src/apis/config/domain");

function objectToQueryString(obj) {
  const queryString = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      queryString.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      );
    }
  }

  return `?${queryString.join("&")}`;
}

const fetchData = async (path, query) => {
  return axios.get(`${url}${path}${query ? objectToQueryString(query) : ""}`, {
    "Content-Type": "application/json",
    withCredentials: true,
  });
};

function useApiGetQuery(queryKey, path, query, filterData) {
  return useQuery([queryKey, path], () =>
    fetchData(path, query).then((res) => filterData(res.data))
  );
}

export default useApiGetQuery;
