import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../views/todo/todo.vue'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Todo
      }
    ]
  })
}
