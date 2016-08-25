<template>
    <div class="weui_cell">
        <div class="weui_cell_hd"><img :src="cloudSrc" alt="" v-link="{'name': 'news', params: {id: data.id}}"></div>
        <div class="weui_cell_ft" v-link="{'name': 'news', params: {id: data.id}}">{{data.title}}</div>
    </div>
</template>

<script>
  import { WAIT_IMG } from '../util'
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
    created () {
      this.$covImg(this, this.data.img, cloudSrc => {
        this.cloudSrc = cloudSrc
      })
    }
  }
</script>

<style scoped>
    .weui_cell_ft{text-align:left;}
    .weui_cell_hd img{width:65px;margin-right:10px;display:block}
</style>
