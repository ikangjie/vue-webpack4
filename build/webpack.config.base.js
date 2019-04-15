const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

// 环境变量
const isDev = process.env.NODE_ENV === 'development'

// webpack的loader是往上递归的
const config = {
  mode: process.env.NODE_ENV || 'production', // development开发环境优化 | production生产环境优化
  target: 'web',
  // 输入
  entry: path.join(__dirname, '../src/main.js'),
  // 输出
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    // 规则
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: createVueLoaderOptions(isDev)
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // 如果图片大小小于1024kb,转成base64
            limit: 1024,
            name: 'resources/[path][name].[hash:8].[ext]'
          }
        }
      ]
    }]
  }
}

module.exports = config
