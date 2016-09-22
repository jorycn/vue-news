import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true
})

router.map({
  '/': {
    name: 'zhihu',
    title: '知乎日报',
    component: (resolve) => {
      require(['./views/zhihu/index.vue'], resolve)
    }
  },
  '/zhihu/:id': {
    name: 'zhihu_show',
    component: (resolve) => {
      require(['./views/zhihu/show.vue'], resolve)
    }
  },
  '/news': {
    name: 'news',
    component: (resolve) => {
      require(['./views/news/index.vue'], resolve)
    }
  },
  '/weixin': {
    name: 'weixin',
    component: (resolve) => {
      require(['./views/weixin/index.vue'], resolve)
    }
  },
  '/about': {
    name: 'about',
    component: (resolve) => {
      require(['./views/about.vue'], resolve)
    }
  }
})

export default router
