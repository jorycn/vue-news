<template>
<div>
  <tabbar>
    <tabbar-item :link="{ name: 'index' }">
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
      <span slot="label">Wechat</span>
    </tabbar-item>
    <tabbar-item show-dot :link="{ name: 'about' }">
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
      <span slot="label">Message</span>
    </tabbar-item>
    <tabbar-item selected>
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
      <span slot="label">Explore</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
      <span slot="label">News</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux-components'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
  .weui_tabbar{opacity: 0.8}
</style>
