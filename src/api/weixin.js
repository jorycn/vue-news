import Vue from 'vue'
import VueResource from 'vue-resource'

import apiUtil from './util'

Vue.use(VueResource)

const config = {
  key: '332f48d75b95fae97bd8643477e89307'
}

const ApiBox = {
  get: 'http://v.juhe.cn/weixin/query'
}

// 参数： pno：页数[1]，ps: 每页条数[100], dtype: [json]
export default {
  get (pno, cb) {
    setTimeout(() => {
      let url = ApiBox.get + '?pno=' + pno + '&key=' + config.key + '&ps=10&dtype=&' + Math.random()
      Vue.http.get(apiUtil.getApi(encodeURIComponent(url)))
      .then(response => {
        let data = response.data
        if (data.error_code !== 0) {
          console.log('请求错误code:' + data.error_code + ',错误提示:' + data.reason)
        } else {
          cb(data)
        }
      })
    }, 100)
  }
}
