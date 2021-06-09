/*
 * @Author: your name
 * @Date: 2021-06-09 10:33:05
 * @LastEditTime: 2021-06-09 15:31:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Vuex from "@/views/vuex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: Vuex,
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/axios.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
