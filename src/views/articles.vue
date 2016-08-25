

<template>
    <divider>{{date}}</divider>
    <div class="weui_cells">
        <cov-article v-for="data in articles" :data="data"></cov-article>  
    </div>
</template>

<script>
  import covArticle from './article.vue'
  import { Divider } from 'vux-components'

  export default {
    props: {
      'articles': {
        type: Array,
        required: true
      },
      date: {
        type: String,
        default () {
          return ''
        }
      }
    },
    components: {
      covArticle,
      Divider
    }
  }
</script>
