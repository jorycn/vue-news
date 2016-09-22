import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueHead from 'vue-head'
import VueProgressbar from 'vue-progressbar'
import { sync } from 'vuex-router-sync'

import App from './views/app'
import store from './vuex/store'
import router from './route'
import CovLocalDB from './util'

Vue.use(VueProgressbar)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueHead)

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

const IMG_MAP = new CovLocalDB('vue-zhihu-img')

Vue.prototype.$preImg = (uri) => {
  if (IMG_MAP[uri]) {
  }
}

Vue.prototype.$covImg = (self, uri, callback) => {
  if (IMG_MAP.get(uri)) {
    return callback(IMG_MAP.get(uri))
  }

  let data = window.btoa(uri.split('').reverse().join(''))
  self.$http.get(window.location.origin + '/imagebox?type=rev-64&data=' + data)
    .then(response => {
      if (response.data.code === 200) {
        IMG_MAP.set(uri, response.data.data.url)
        callback(response.data.data.url)
      } else {
        console.log(response.data.message)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

Vue.config.debug = process.env.NODE_ENV === 'dev'

sync(store, router)

router.start(App, 'app')
