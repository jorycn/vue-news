<template>
    <div class="about-container g-wrap">
        <p>么么哒~</p>
        <p>Wechat：{{author}}</p>
        <p>QQ : {{qq}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'jorycn',
      qq: '328516512'
    }
  },
  ready () {
    this.$dispatch('set-head', 'About Me')
  }
}
</script>

<style>
    .about-container {
        padding-top:50px;
        text-align: center;
    }
</style>
