import axios from "axios";

export function initialAxios() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.headers["Access-Control-Allow-Origin"] =
    "http://localhost:3001";
}
