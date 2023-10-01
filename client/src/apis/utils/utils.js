const { default: axios } = require("axios");
const domain = require("../config/domain");
// import {getItem} from "@SessionStorage"

const BASE_URL = domain.serverUrl;

const axiosApi = (serverUrl, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// const axiosAuthApi = (url, options) => {
//   const token = getItem("key");
//   const instance = axios.create({
//     baseURL: url,
//     headers: { Authorization: "token" },
//     ...options,
//   });

//   return instance;
// };

exports.defaultInstance = axiosApi(BASE_URL);
// exports.authInstance = axiosAuthApi(BASE_URL);
