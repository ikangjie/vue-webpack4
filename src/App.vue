<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <router-link to="/app" v-wechat-title="$route.meta.title">app</router-link>
    <router-link to="/login" v-wechat-title="$route.meta.title">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <!-- 多路由切换 -->
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Todo from './views/todo/todo.vue'

console.log(Header.__docs)

export default {
  components: {
    Header,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
#app{
  width 100%
  min-height 100%
  position absolute
  left 0
  top 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
