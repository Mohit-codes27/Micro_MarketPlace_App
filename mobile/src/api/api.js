import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.8:5000", // replace
});

export default API;
