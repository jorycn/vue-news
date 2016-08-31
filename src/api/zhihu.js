import Vue from 'vue'
import VueResource from 'vue-resource'

import apiUtil from './util'

Vue.use(VueResource)

const ApiBox = {
  'getList': 'http://news.at.zhihu.com/api/4/news/before/',
  'show': 'http://news-at.zhihu.com/api/4/news/'
}

export default {
  getList (datePointer, cb) {
    setTimeout(() => {
      Vue.http.get(apiUtil.getApi(ApiBox.getList + datePointer))
      .then(response => {
        cb(response)
      })
    }, 100)
  },
  show (id, cb) {
    setTimeout(() => {
      Vue.http.get(apiUtil.getApi(ApiBox.show + id))
      .then(response => {
        cb(response)
      })
    }, 100)
  }
}
