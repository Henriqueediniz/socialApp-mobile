import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
  //baseURL: "10.0.3.2:3000" // to use in adroid emulator
});

export default api;
