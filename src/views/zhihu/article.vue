<template>
    <Flexbox :gutter="0">
      <flexbox-item :span="2/10"><img :src="cloudSrc" alt="" v-link="{'name': 'zhihu_show', params: {id: data.id}}"></flexbox-item>
      <flexbox-item :span="7/10" v-link="{'name': 'zhihu_show', params: {id: data.id}}">{{data.title}}</flexbox-item>
    </Flexbox>
</template>

<script>
  import { WAIT_IMG } from '../../util'
  import { Flexbox, FlexboxItem } from 'vux-components'

  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        cloudSrc: WAIT_IMG
      }
    },
    components: {
      Flexbox,
      FlexboxItem
    },
    created () {
      this.$covImg(this, this.data.img, cloudSrc => {
        this.cloudSrc = cloudSrc
      })
    }
  }
</script>

<style scoped>
  .vux-flex-row{
    color: #888;
    padding: .4rem .2rem;
    border-bottom: 1px solid #efebeb;
  }
  .vux-flexbox .vux-flexbox-item{
    padding:0 0.2rem;
  }
</style>
