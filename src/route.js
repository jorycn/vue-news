import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true
})

router.map({
  '/': {
    name: 'news',
    component: (resolve) => {
      require(['./views/news/index.vue'], resolve)
    }
  },
  '/zhihu': {
    name: 'zhihu',
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
  '/weixin': {
    name: 'weixin',
    component: (resolve) => {
      require(['./views/a.vue'], resolve)
    }
  },
  '/weibo': {
    name: 'weibo',
    component: (resolve) => {
      require(['./views/b.vue'], resolve)
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
