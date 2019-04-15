import Vue from 'vue'

const app = new Vue({
  el: '#root', // 挂载的过程会把整个节点替换掉
  data: {
    text: 'hello world'
  },
  template: '<div>{{text}}</div>'
})

console.log('$data=数据变量', app.$data)
console.log('$props=接受的参数', app.$props)
console.log('$el=挂载节点', app.$el)
console.log('$options=实例的整个对象', app.$options)
console.log('$root', app.$root === app)
console.log('$children=在组件标签中插入DOM就是children', app.$children)
console.log('$slots=插槽', app.$slots)
console.log('$scopedSlots=作用域插槽', app.$scopedSlots)
console.log('$refs=节点引用', app.$refs)
console.log('$isServer判断服务类型', app.$isServer)

// $once监听事件
app.$once('test', (a, b) => {
  console.log(`test emited ${1} ${b}`)
})
setInterval(() => {
  app.$emit('test', 1, 2)
}, 1000)
