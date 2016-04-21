'use strict'

let path = require('path')

let Webpack = require('webpack')
let WebpackNotify = require('webpack-notifier')
let WebpackHTML = require('html-webpack-plugin')

module.exports = [
  // new WebpackHTML({
  //   title: 'DEV',
  //   template: path.join(process.cwd(), '.gir/webpack/plugins', 'templates/index.html'),
  //   filename: 'index.html',
  //   chunks: ['vendor', 'index'],
  //   inject: 'body'
  // }),
  new WebpackNotify(),
  new Webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].js',
    chunks: ['App'],
    minChunks: 2
  }),
  new Webpack.HotModuleReplacementPlugin()
]
