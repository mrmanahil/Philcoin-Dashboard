// import requests from "src/services/httpService";
import requests from "../services/httpService";

const Services = {
  getAll({ query }) {
    return requests.get(`invoice/admin`);
  },
  getAllById(query) {
    return requests.get(`reviews/playlist/${query}`);
  },
  getById(id) {
    return requests.get(`reviews/${id}`);
  },
  add(body) {
    return requests.post("reviews", body);
  },
  update(id, body) {
    return requests.put(`reviews/${id}`, body);
  },
  delete(id) {
    return requests.delete(`reviews/${id}`);
  },
};

export default Services;
