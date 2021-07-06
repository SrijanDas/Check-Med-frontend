import axios from "axios";

let env = process.env.NODE_ENV;
let baseURL = process.env.REACT_APP_API_URL;

if (env === "development") {
  baseURL = process.env.REACT_APP_API_URL_DEV;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
