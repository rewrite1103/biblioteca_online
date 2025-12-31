



import axios from "axios";

const api = axios.create({
  baseURL: "https://tarea.dhambha.com/api/elastic",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});



export default api;