import Vue from 'vue'
import Router from 'vue-router'
import createRouter from './router/router.js'
import App from './App.vue'

import './assets/styles/global.styl'

Vue.use(Router)

const router = createRouter()

// 路由守卫
// 每一次路由守卫跳转的时候触发
router.beforeEach((to, from, next) => {
  console.log('router beforeEach')
  // 页面是否是app，否则阻止路由跳转
  // if (to.fullPath === '/app') {
  //   // next()
  //   // next({path,redirect})
  // }
  next()
})

// 和beforeEach一样，区别是时机不一样
router.beforeResolve((to, from, next) => {
  console.log('router beforeResolve')
  next()
})

// 每一次导航跳转之后触发
router.afterEach((to, from) => {
  console.log('router afterEach')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

// const root = document.createElement('div')
// document.body.appendChild(root)

// new Vue({
//   router,
//   render: (h) => h(App)
// }).$mount(root)
