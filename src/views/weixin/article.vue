<template>
    <Flexbox :gutter="0">
      <flexbox-item :span="2/10"><img :src="data.img" alt="" @click="openDialog()" width="100%" height="60px"></flexbox-item>
      <flexbox-item :span="7/10" @click="openDialog()">
        <p><span class="time">【{{data.source}}】</span></p>
        <p>{{data.title}}</p>
      </flexbox-item>
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
    methods: {
      openDialog () {
        // this.$dispatch('open-dialog', this.data.url)
        window.location.href = this.data.url
      }
    }
  }
</script>

<style scoped>
  .vux-flex-row{
    color: #737272;
    padding: .4rem .2rem;
    border-bottom: 1px solid #efebeb;
  }
  .time{
    color: #9c9b9b;
    margin: 0 0.2rem;
  }
  .vux-flexbox .vux-flexbox-item{
    padding:0 0.2rem;
  }
</style>
