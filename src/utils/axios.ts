/*
 * @Author: your name
 * @Date: 2021-06-09 15:53:57
 * @LastEditTime: 2021-06-09 16:11:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/src/utils/axios.ts
 */
import Axios from "axios";
import { ElMessage } from "element-plus";

const baseURL = "https://api.github.com";

const axios = Axios.create({
  baseURL,
  timeout: 2000,
});

axios.interceptors.request.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response && err.response.data) {
      const code = err.response.status;
      const msg = err.response.data.ElMessage;
      ElMessage.error(`code: ${code}, message: ${msg}`);
      console.error(`[axios error]`, err.response);
    } else {
      ElMessage.error(`${err}`);
    }
    return Promise.reject(err);
  }
);

export default axios;
