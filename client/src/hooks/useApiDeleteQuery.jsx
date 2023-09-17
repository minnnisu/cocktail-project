import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { url } = require("../apis/config/domain");

const deleteData = (path, id) => {
  return axios.delete(`${url}${path}${id ? `/${id}` : ""}`, {
    withCredentials: true,
  });
};

function useApiDeleteQuery(path, id, onSuccess, onError) {
  return useMutation(() => deleteData(path, id), {
    onError,
    onSuccess,
  });
}

export default useApiDeleteQuery;
