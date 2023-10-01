import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { serverUrl } = require("../../src/apis/config/domain");

const postData = (path, body) => {
  return axios.post(`${serverUrl}${path}`, body, {
    withCredentials: true,
  });
};

function useApiPostQuery(path, onSuccess, onError) {
  return useMutation((body) => postData(path, body), {
    onError,
    onSuccess,
  });
}

export default useApiPostQuery;
