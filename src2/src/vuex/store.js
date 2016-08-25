import Vue from 'vue'
import Vuex from 'vuex'

import Zhihu from './modules/zhihu'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Zhihu
  },
  strict: debug
})
