/*
 * @Author: your name
 * @Date: 2021-06-09 10:03:40
 * @LastEditTime: 2021-06-10 20:57:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/src/main.ts
 */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
