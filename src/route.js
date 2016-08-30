import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true
})

router.map({
  '/': {
    name: 'index',
    component: (resolve) => {
      require(['./view/zhihu/index.vue'], resolve)
    }
  },
  '/zhihu/:id': {
    name: 'zhihu_show',
    title: '',
    component: (resolve) => {
      require(['./view/zhihu/show.vue'], resolve)
    }
  }
})

// router.map({
//   '/': {
//     name: 'index',
//     component: (resolve) => {
//       require(['./views/list.vue'], resolve)
//     }
//   },
//   '/themes': {
//     name: 'themes',
//     component: (resolve) => {
//       require(['./views/themes.vue'], resolve)
//     }
//   },
//   '/themes/:id': {
//     name: 'theme-list',
//     component: (resolve) => {
//       require(['./views/themeList.vue'], resolve)
//     }
//   },
//   '/news/:id': {
//     name: 'news',
//     component: (resolve) => {
//       require(['./views/news.vue'], resolve)
//     }
//   },
//   '/about/': {
//     name: 'about',
//     component: (resolve) => {
//       require(['./views/about.vue'], resolve)
//     }
//   }
// })

export default router
