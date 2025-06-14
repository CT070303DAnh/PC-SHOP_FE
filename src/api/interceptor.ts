import axios, { AxiosInstance } from "axios";
import { clearLS, getAccessTokenFromLS } from "../utils/auth.util";

const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api/auth", // thêm baseURL để đỡ phải lặp lại nhiều lần
});

instance.interceptors.request.use(
  function (config) {
    const access_token = getAccessTokenFromLS();
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
