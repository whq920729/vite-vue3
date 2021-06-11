/*
 * @Author: your name
 * @Date: 2021-06-09 10:03:40
 * @LastEditTime: 2021-06-11 15:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/src/main.ts
 */

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import { createApp } from 'vue'

import router from './router/index'
import store from './store/index'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
