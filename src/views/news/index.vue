
<template>
  <div>
    <div class="g-wrap g-news">
        <div class="list-container">
            <cov-articles :articles="value"  v-for="(key, value) of items"></cov-articles>
        </div>
    </div>
  </div>
</template>

<script>
import covArticles from './articles.vue'
import { nSetItems } from '../../vuex/action'
import { Scroller, Spinner } from 'vux-components'

import newsApi from '../../api/news.js'

export default {
  vuex: {
    getters: {
      items: ({ News }) => News.items
    },
    actions: {
      nSetItems
    }
  },
  components: {
    covArticles,
    Scroller,
    Spinner
  },
  created () {
    this.loadData()
    this.$dispatch('set-head', '今日头条')
  },
  methods: {
    loadData () {
      newsApi.get('top', response => {
        let data = response.result.data
        let arr = []
        for (let a of data) {
          arr.push({
            title: a.title,
            type: a.type,
            img: a.thumbnail_pic_s,
            url: a.url,
            date: a.date.split(' ')[1]
          })
        }
        this.nSetItems(arr)
      })
    }
  }
}
</script>

<style lang="less">
.vux-flexbox{
  width:98%;
}
.g-news{
  font-size: 12px;
}
</style>
