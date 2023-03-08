import axios from "axios";

// ** Config
import config from "configs/auth";
const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const storedToken = window.localStorage.getItem(config.storageTokenKeyName);

  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
    },
  };
});

export default instance;
