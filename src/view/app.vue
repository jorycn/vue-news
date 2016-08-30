<template>
  <div style="height:100%;">
    <loading :show="isLoading" position="absolute"></loading>
    <view-box v-ref:view-box>
      <!--header slot-->
      <div class="g-header-box" slot="header">
        <x-header :left-options="leftOptions" :title="title" @on-click-title="scrollTop"></x-header>
        <scroller lock-y :scrollbar-x=false>
          <div class="top-nav">
            <div class="top-nav-item active">知乎日报</div>
            <div class="top-nav-item">微信精选</div>
          </div>
        </scroller>
      </div>
      <!--default slot-->
      <router-view
      :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
      ></router-view>
    </view-box>
  </div>
</template>

<script>
import store from '../vuex/store'
import { Scroller, Tabbar, TabbarItem, Loading, ViewBox, XHeader } from 'vux-components'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Loading,
    ViewBox,
    XHeader,
    Scroller
  },
  store: store,
  vuex: {
    getters: {
      route: (state) => state.route,
      isLoading: (state) => state.isLoading,
      direction: (state) => state.direction
    }
  },
  methods: {
    scrollTop () {
      this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
    }
  },
  computed: {
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    title () {
      if (this.route.path === '/') return '小白巷'
      if (this.route.path.match(/zhihu/)) return '小白巷 - 知乎日报'
    }
  }
}
</script>

<style lang="less">
@import '../assets/1px.less';

html, body {
  height: 100%;
  max-width:660px;
  margin:0 auto;
  overflow-x: hidden;
}
.top-nav {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 100%;
  font-size: 13px;
  background: hsla(0,0%,100%,0.7) border-box;
  .top-nav-item {
    width: 60px;
    display: inline-block;
    margin-left: 10px;
    float: left;
    text-align: center;
    :first-child{
      margin-left:5px;
    }
    &.active{
      border-bottom:1px solid #000;
      font-weight:bold;
    }
  }
}
.weui_tab_bd{
  padding-bottom:0
}
.g-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.g-wrap{
  margin-top:82px;
}
.load{
  cursor:pointer;
  text-align: center;
  height: 1.2rem;
  line-height: 1.2rem;
  margin-top: 1rem;
  color: #928989;
  font-size: 13px;
}
/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
