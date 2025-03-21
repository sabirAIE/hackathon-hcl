import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  req.headers['Content-Type'] = 'application/json';
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  
  return req;
});

export default API;
