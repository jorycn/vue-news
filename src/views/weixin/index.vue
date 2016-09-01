
<template>
  <div>
    <div class="g-wrap g-news">
        <div class="list-container">
            <cov-articles :articles="value"  v-for="(key, value) of items"></cov-articles>
        </div>
        <p @click="loadData" class="load">点击加载</p>
    </div>
  </div>
</template>

<script>
import covArticles from './articles.vue'
import { wSetItems } from '../../vuex/action'
import { Scroller, Spinner } from 'vux-components'

import weixinApi from '../../api/weixin.js'

export default {
  vuex: {
    getters: {
      items: ({ Weixin }) => Weixin.items,
      pno: ({ Weixin }) => Weixin.pno
    },
    actions: {
      wSetItems
    }
  },
  components: {
    covArticles,
    Scroller,
    Spinner
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData (uuid) {
      console.log(this.pno)
      weixinApi.get(this.pno, response => {
        let data = response.result.list
        let arr = []
        for (let a of data) {
          arr.push({
            title: a.title,
            source: a.source,
            img: a.firstImg,
            url: a.url
          })
        }
        this.wSetItems(arr)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.vux-flexbox{
  width:98%;
}
.g-news{
  font-size: 12px;
}
.load{
  text-align:center;
}
</style>
