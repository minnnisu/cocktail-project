import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { serverUrl } = require("../apis/config/domain");

const deleteData = (path) => {
  return axios.delete(`${serverUrl}${path}`, {
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
