import Vue from 'vue'
import Vuex from 'vuex'

import Zhihu from './modules/zhihu'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'
const state = {
  isLoading: false,
  direction: 'forward'
}

export default new Vuex.Store({
  modules: {
    Zhihu
  },
  state,
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  },
  strict: debug
})
