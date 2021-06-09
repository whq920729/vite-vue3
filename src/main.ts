/*
 * @Author: your name
 * @Date: 2021-06-09 10:03:40
 * @LastEditTime: 2021-06-09 16:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";

import ElementPlus from 'element-plus'

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
