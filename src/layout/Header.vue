<template>
  <header :class="$style.mainHeader">
    <h1>待办事项</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" module>
.main-header{
  text-align center
  h1{
    font-size 50px
    color: rgba(175, 47, 47, 0.4)
    font-weight 100
    margin 20px
  }
}
</style>

<docs>
# Header
</docs>
