<template>
  <div style="height:100%;" id="g-xbhub" :class="{ 'open-dialog':showDialog }">
    <loading :show="isLoading" position="absolute"></loading>
    <view-box v-ref:view-box>
      <!--header slot-->
      <div class="g-header-box" slot="header">
        <x-header :left-options="leftOptions" :title="seo.title" @on-click-title="scrollTop"></x-header>
        <scroller lock-y :scrollbar-x=false>
          <div class="top-nav">
            <div class="top-nav-item" :class="{ 'first-nav':isIndex }" v-link="{'name': 'zhihu'}">知乎日报</div>
            <div class="top-nav-item" v-link="{'name': 'news'}">今日头条</div>
            <div class="top-nav-item" v-link="{'name': 'weixin'}">微信精选</div>
            <div class="top-nav-item" @click="openBlog">博客</div>
            <div class="top-nav-item" v-link="{'name': 'about'}">关于</div>
          </div>
        </scroller>
      </div>
      <!--default slot-->
      <router-view
      :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
      ></router-view>
    </view-box>
    <dialog :show.sync="showDialog" id="m-dialog" :scroll="false">
      <span class="vux-close" @click="showDialog=false"></span>
      <div class="img-box" v-bind:style="{ height:dialogHeight + 'px'}">
        <iframe :src="dialogurl" v-el:dframe frameborder="0" v-bind:style="{ height:dialogHeight + 'px'}" width="100%"></iframe>
      </div>
    </dialog>
  </div>
</template>

<script>
import store from '../vuex/store'
import { Scroller, Tabbar, TabbarItem, Loading, ViewBox, XHeader, Dialog } from 'vux-components'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Loading,
    ViewBox,
    XHeader,
    Scroller,
    Dialog
  },
  store: store,
  vuex: {
    getters: {
      route: (state) => state.route,
      isLoading: (state) => state.isLoading,
      direction: (state) => state.direction
    }
  },
  data () {
    return {
      dialogurl: '',
      showDialog: false,
      seo: {
        title: 'Home'
      }
    }
  },
  methods: {
    scrollTop () {
      this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
    },
    openBlog () {
      // this.$dispatch('open-dialog', 'http://www.xbhub.com')
      window.location.href = 'http://www.xbhub.com'
    }
  },
  computed: {
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    isIndex () {
      return this.route.path === '/'
    }
  },
  created: function () {
    this.dialogHeight = 400
  },
  head: {
    title: function () {
      return {
        inner: this.seo.title
      }
    }
  },
  events: {
    'open-dialog': function (url) {
      this.dialogurl = url
      store.dispatch('UPDATE_LOADING', true)
      setTimeout(() => {
        this.showDialog = true
        store.dispatch('UPDATE_LOADING', false)
      }, 500)
    },
    'set-head': function (msg) {
      setTimeout(() => {
        this.seo.title = msg
        this.$emit('updateHead')
      })
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
.weui_dialog{
  width:98%
}
#g-xbhub .vux-close {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 20px;
  overflow: hidden;
  color: #ccc;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    background: #98979d;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
}
</style>
