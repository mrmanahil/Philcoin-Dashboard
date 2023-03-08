import { AxiosResponse } from "axios";
import requests from "./httpService";

const AuthServices = {
  login(body) {
    return requests.post(`/auth/signin`, body);
  },
  signup(body) {
    return requests.post(`/auth/signup`, body);
  },
  me() {
    return requests.get(`/auth/me`);
  },
  channelSwitch(id) {
    return requests.get(`/auth/switch/${id}`);
  },
};

export default AuthServices;
