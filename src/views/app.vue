<style src="../assets/base.css"></style>
<template>
  <div id="app">
    <head-bar></head-bar>
    <router-view></router-view>
    <!--<foot-bar></foot-bar>-->
  </div>
</template>

<script>
import store from '../vuex/store'

import headBar from './partials/headBar.vue'
import headTab from './partials/headTab.vue'
import footBar from './partials/footBar.vue'

export default {
  store,
  components: {
    headBar,
    footBar,
    headTab
  }
}
</script>
