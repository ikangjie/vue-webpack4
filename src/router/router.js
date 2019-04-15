import Router from 'vue-router'
// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    routes,
    fallback: true // 如果不支持路由则自动转为hash
    // 带参数的路由
    // parseQuery (query) {},
    // stringifyQuery (obj) {}
    // 路由滚动行为
    // scrollBehavior (to, from, savedPosition) {
    //   // to:路由跳转到另外一个路由
    //   // from:从某个路由跳转到另外一个路由
    //   // 判断是否有滚动行为
    //   if (savedPosition) {
    //     return savedPosition
    //   } else {
    //     return { x: 0, y: 0 }
    //   }
    // }
    // linkActiveClass: 'active-link', // 路由跳转样式
    // linkExactActiveClass: 'exact-active-link' // 路由跳转样式
    // base: '/base/' // 修改根目录默认地址
  })
}

// export default () => {
//   return new Router(
//     [
//       {
//         path: '/app',
//         component: Todo
//       },
//       {
//         path: '/login',
//         component: Login
//       }
//     ]
//   )
// }
