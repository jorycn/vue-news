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
      let _url = encodeURIComponent(ApiBox.getList + datePointer)
      Vue.http.get(apiUtil.getApi(_url))
      .then(response => {
        cb(response)
      })
    }, 100)
  },
  show (id, cb) {
    setTimeout(() => {
      let _url = encodeURIComponent(ApiBox.show + id)
      Vue.http.get(apiUtil.getApi(_url))
      .then(response => {
        cb(response)
      })
    }, 100)
  }
}
