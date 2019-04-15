const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HTMLPlugin = require('html-webpack-plugin')

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, '../practice/template.html')
  })
]

const devServer = {
  // 端口
  port: 8100,
  // 本地IP也能访问
  host: '0.0.0.0',
  // webpack编译错误显示在网页上
  overlay: {
    errors: true
  },
  // 只渲染组件，不渲染页面
  hot: true
}

let config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/main.js'),
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  // import Vue from 'vue'
  resolve: {
    // 别名
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
})

module.exports = config
