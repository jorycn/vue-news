
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
import { setAticles, setDatePointer } from '../../vuex/action'
import { Scroller, Spinner } from 'vux-components'

export default {
  vuex: {
    getters: {
      datePointer: ({ Zhihu }) => Zhihu.datePointer,
      days: ({ Zhihu }) => Zhihu.days
    },
    actions: {
      setAticles,
      setDatePointer
    }
  },
  data () {
    return {
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
    load (uuid) {
      setTimeout(() => {
        this.dataPointerCalc(true, uuid)
      }, 10)
    },
    dataPointerCalc (plus, uuid) {
      if (!this.datePointer.value) {
        this.setDatePointer(new Date())
        this.fetchList(uuid)
      } else {
        if (plus) {
          let nextDay = new Date(this.datePointer.format)
          this.setDatePointer(new Date(nextDay - 86400000))
          this.fetchList(uuid)
        }
      }
    },
    fetchList (uuid) {
      this.$http.get(this.$Api('http://news.at.zhihu.com/api/4/news/before/' + this.datePointer.value))
        .then(response => {
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
          this.setAticles(this.datePointer.format, arr)
          setTimeout(() => {
            this.$broadcast('pullup:reset', uuid)
          }, 10)
        })
    }
  }
}
</script>

<style>
  .vux-flexbox{width:98%}
</style>
