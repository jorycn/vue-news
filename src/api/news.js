import Vue from 'vue'
import VueResource from 'vue-resource'

import apiUtil from './util'

Vue.use(VueResource)

const config = {
  key: '4516fa7241760c857ac2296f32e2174c'
}

const ApiBox = {
  get: 'http://v.juhe.cn/toutiao/index'
}

export default {
  get (type, cb) {
    setTimeout(() => {
      Vue.http.get(apiUtil.getApi(ApiBox.get + '?key=' + config.key + '&type=' + type))
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
