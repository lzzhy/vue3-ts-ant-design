/*
 * @Author: your name
 * @Date: 2021-05-31 15:00:41
 * @LastEditTime: 2021-05-31 15:01:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-ts/src/store/index.ts
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state () {
    return defaultState
  },
  mutations: {
    increment (state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  getters: {
    double (state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
