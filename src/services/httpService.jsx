import axios from "axios";

// ** Config
import config from "configs/auth";

const instance = axios.create({
  baseURL: `http://192.168.0.51:3000/api/v1`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const storedToken = window.localStorage.getItem("accessToken");

  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
    },
  };
});

export default instance;
