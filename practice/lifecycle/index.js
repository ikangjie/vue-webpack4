import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    text: 'hello world'
  },
  template: '<div>{{text}}</div>',
  beforeCreate () { // vue实例部分初始化之后执行
    console.log(this.$el, 'beforeCreate=vue实例部分初始化之后执行')
  },
  created () { // vue处理外部的注册或者双向绑定的时候执行
    console.log(this.$el, 'created=vue处理外部的注册或者双向绑定的时候执行')
  },
  beforeMount () { // 模板和数据相结合即将挂载到页面之前执行
    console.log(this.$el, 'beforeMount=模板和数据相结合即将挂载到页面之前执行')
  },
  mounted () { // 页面挂载之后执行
    console.log(this.$el, 'mounted=页面挂载之后执行')
  },
  beforeUpdate () { // 当数据被改变还没有渲染之前
    console.log(this, 'beforeUpdate=当数据被改变还没有渲染之前')
  },
  updated () { // 当数据被改变渲染之后
    console.log(this, 'updated=当数据被改变渲染之后')
  },
  activated () { // keep-alive组件激活时调用，该钩子在服务器端渲染期间不被调用
    console.log(this, 'activated')
  },
  deactivated () { // keep-alive组件停用时调用，该钩子在服务器端渲染期间不被调用
    console.log(this, 'deactivated')
  },
  beforeDestroy () { // 实例还没有被销毁之前执行 $destroy()
    console.log(this, 'beforeDestroy=实例还没有被销毁之前执行')
  },
  destroyed () { // 销毁完成执行
    console.log(this, 'destroyed=销毁完成执行')
  },
  errorCaptured (err, component, string) { // 当捕获一个来自子孙组件的错误时被调用
    console.log(err, component, string)
  }
})
