/*
 * @Author: your name
 * @Date: 2021-06-09 15:32:06
 * @LastEditTime: 2021-06-09 15:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/src/store/index.ts
 */

import { createStore } from 'vuex'

const defaultState = {
    count: 1
}

export default createStore({
    state() {
        return defaultState
    },
    mutations: {
        increment(state: typeof defaultState) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        double(state: typeof defaultState) {
            return 2 * state.count
        }
    }
})