import axios from "axios";

const baseUrl = "http://localhost:3000";
// process.env.NODE_ENV === "production" ?
// : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
