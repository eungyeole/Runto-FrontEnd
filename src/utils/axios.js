import axios from "axios";

const DOMAIN = "http://10.156.147.199:8787";
axios.defaults.withCredentials = false; 
export const request = (method, url, headers, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers : headers,
    data,
  })
    .then((res) => res.data)
};