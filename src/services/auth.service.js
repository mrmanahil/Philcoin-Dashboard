import { AxiosResponse } from "axios";
import requests from "./httpService";

const AuthServices = {
  login(body) {
    return requests.post(`/auth/login`, body);
  },
  signup(body, query) {
    if (query) {
      return requests.post(`/auth/register?ref=${query}`, body);
    } else {
      return requests.post(`/auth/register`, body);
    }
  },
  // signup(body) {
  //   return requests.post(`/auth/register`, body);
  // },
  me() {
    return requests.get(`/auth/me`);
  },
  channelSwitch(id) {
    return requests.get(`/auth/switch/${id}`);
  },
};

export default AuthServices;
