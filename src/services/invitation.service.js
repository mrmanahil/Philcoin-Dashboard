// import requests from "src/services/httpService";
import requests from "./httpService";

const Services = {
  getAll() {
    return requests.get(`invite`);
  },
  getAllById(query) {
    return requests.get(`reviews/playlist/${query}`);
  },
  getById(id) {
    return requests.get(`reviews/${id}`);
  },
  add(body) {
    return requests.post("invite", body);
  },
  update(id, body) {
    return requests.put(`reviews/${id}`, body);
  },
  delete(id) {
    return requests.delete(`reviews/${id}`);
  },
};

export default Services;
