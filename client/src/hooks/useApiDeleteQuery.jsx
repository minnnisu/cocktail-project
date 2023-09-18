import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { url } = require("../apis/config/domain");

const deleteData = (path) => {
  return axios.delete(`${url}${path}`, {
    withCredentials: true,
  });
};

function useApiDeleteQuery(path, onSuccess, onError) {
  return useMutation(() => deleteData(path), {
    onError,
    onSuccess,
  });
}

export default useApiDeleteQuery;
