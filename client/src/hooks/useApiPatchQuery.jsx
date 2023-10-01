import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { serverUrl } = require("../../src/apis/config/domain");

const patchData = (path, body) => {
  return axios.patch(`${serverUrl}${path}`, body, {
    withCredentials: true,
  });
};

function useApiPatchQuery(path, onSuccess, onError) {
  return useMutation((body) => patchData(path, body), {
    onError,
    onSuccess,
  });
}

export default useApiPatchQuery;
