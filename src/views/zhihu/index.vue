
<template>
    <!--content slot-->
    <div class="g-wrap">
        <div class="list-container">
            <cov-articles :articles="value.articles" :date="value.date" v-for="(key, value) of days"></cov-articles>
        </div>
        <div class="load" @click="dataPointerCalc(true)">点击加载</div>
    </div>
</template>

<script>
import covArticles from './articles.vue'
import { zSetAticles, zSetDatePointer } from '../../vuex/action'
import { Scroller, Spinner } from 'vux-components'
import zhihuApi from '../../api/zhihu.js'

export default {
  vuex: {
    getters: {
      datePointer: ({ Zhihu }) => Zhihu.datePointer,
      days: ({ Zhihu }) => Zhihu.days
    },
    actions: {
      zSetAticles,
      zSetDatePointer
    }
  },
  components: {
    covArticles,
    Scroller,
    Spinner
  },
  created () {
    this.dataPointerCalc()
  },
  methods: {
    dataPointerCalc (plus, uuid) {
      if (!this.datePointer.value) {
        this.zSetDatePointer(new Date())
        this.fetchList(uuid)
      } else {
        if (plus) {
          let nextDay = new Date(this.datePointer.format)
          this.zSetDatePointer(new Date(nextDay - 86400000))
          this.fetchList(uuid)
        }
      }
    },
    fetchList (uuid) {
      zhihuApi.getList(this.datePointer.value, response => {
        const data = response.data
        let arr = []
        for (let article of data.stories) {
          arr.push({
            type: 'news',
            title: article.title,
            img: article.images[0],
            id: article.id
          })
        }
        this.zSetAticles(this.datePointer.format, arr)
      })
    }
  }
}
</script>

<style>
  .vux-flexbox{width:98%}
</style>
