import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { url } = require("../../src/apis/config/domain");

const putData = (path, body) => {
  return axios.put(`${url}${path}`, body);
};

function useApiPutQuery(path, onSuccess, onError) {
  return useMutation((body) => putData(path, body), {
    onError,
    onSuccess,
  });
}

export default useApiPutQuery;
