<template>
  <div style="height:100%;">
    <loading :show="isLoading" position="absolute"></loading>
    <view-box v-ref:view-box>
      <!--header slot-->
      <div class="g-header-box" slot="header">
        <x-header :left-options="leftOptions" :title="title" @on-click-title="scrollTop"></x-header>
        <scroller lock-y :scrollbar-x=false>
          <div class="top-nav">
            <div class="top-nav-item" :class="{ 'first-nav':isIndex }" v-link="{'name': 'news'}">今日头条</div>
            <div class="top-nav-item" v-link="{'name': 'zhihu'}">知乎日报</div>
            <div class="top-nav-item disabled" v-link="{'name': 'weixin'}">微信精选</div>
            <div class="top-nav-item disabled" v-link="{'name': 'weibo'}">微博话题</div>
            <div class="top-nav-item" @click="redirect('http://www.xbhub.com')">博客</div>
            <div class="top-nav-item" v-link="{'name': 'about'}">关于</div>
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
    },
    redirect (url) {
      window.location.href = url
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
      if (this.route.path.match(/weixin/)) return '小白巷 - 微信精选'
      if (this.route.path.match(/weibo/)) return '小白巷 - 微博长文'
      if (this.route.path.match(/about/)) return '小白巷 - 关于'
    },
    isIndex () {
      return this.route.path === '/'
    }
  }
}
</script>

<style lang="less">
@import '../assets/1px.less';

.disabled{
  color:#888;
}
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
  width: 450px;
  font-size: 13px;
  background: hsla(0,0%,100%,0.7) border-box;
  .top-nav-item {
    width: 60px;
    display: inline-block;
    margin-left: 8px;
    float: left;
    text-align: center;
    &.v-link-active{
      border-bottom:1px solid #000;
      font-weight:bold;
      &:first-child{
        border:none;
      }
    }
    
    &:first-child{
      margin-left:5px;
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
