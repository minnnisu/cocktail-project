import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const { url } = require("../../src/apis/config/domain");

const patchData = (path, id, body) => {
  return axios.patch(`${url}${path}${id ? `/${id}` : ""}`, body, {
    withCredentials: true,
  });
};

function useApiPatchQuery(path, id, onSuccess, onError) {
  return useMutation((body) => patchData(path, id, body), {
    onError,
    onSuccess,
  });
}

export default useApiPatchQuery;
