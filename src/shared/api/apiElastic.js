



import axios from "axios";

const api = axios.create({
  baseURL: "http://158.23.57.209:8080/api/elastic",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});



export default api;