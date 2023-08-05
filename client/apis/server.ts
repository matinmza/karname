import axios from "axios";
const BASE_URL = "http://localhost:8800";
const server = axios.create({
  baseURL: BASE_URL,
});

export default server;
