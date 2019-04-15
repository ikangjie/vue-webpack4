import Vue from 'vue'
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)

export default [
  {
    path: '/',
    name: 'app', // 设置后可以使用{name}跳转
    redirect: '/app' // 默认跳转到app
  },
  {
    path: '/app',
    component: Todo,
    // 多路由切换
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    // 设置meta信息
    meta: {
      title: '首页',
      description: 'this is app'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登陆页',
      description: 'this is login'
    }
    // 多路由切换
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
