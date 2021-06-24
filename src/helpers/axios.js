import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL_LOCAL;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
