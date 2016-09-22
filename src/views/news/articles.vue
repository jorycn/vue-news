
<template>
    <div class="item__list">
        <cov-article v-for="data in articles" :data="data"></cov-article>
    </div>
</template>

<script>
  import covArticle from './article.vue'
  import { Divider, Flexbox, FlexboxItem } from 'vux-components'

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
      Divider,
      Flexbox,
      FlexboxItem
    }
  }
</script>
