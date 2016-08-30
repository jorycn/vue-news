<template>
  <scroller lock-y :scrollbar-x=false>
      <div class="top-nav">
        <div class="top-nav-item" v-for="i in 20"><span>{{ i }}</span></div>
      </div>
    </scroller>
</template>

<script>
import { Scroller } from 'vux-components'

export default {
  components: {
    Scroller
  },
  ready () {
  }
}
</script>

<style scoped>
.top-nav {
  position: relative;
  height: 100px;
  position: relative;
  width: 100%;
}
.top-nav-item {
  width: 60px;
  height: 40px;  
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
</style>
