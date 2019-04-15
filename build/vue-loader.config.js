const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    //template里一行最后多余的空格会导致编译时出问题, 这个参数设置true可以忽略空格
    preserveWhitepace: true,
    //不是开发环境的时候将.vue文件里的css单独打包成css文件
    extractCSS: !isDev,
    cssModules: {
      //根据环境变量不同在vue文件里生成css文件
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      //将css中用 '-' 连接的转化为驼峰
      camelCase: true
    },
    //自定义Vue模板
    loaders: {
      'docs': docsLoader
    }
  }
}