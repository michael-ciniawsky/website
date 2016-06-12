'use strict'

const path = require('path')

const Webpack = require('webpack')
const WebpackNotify = require('webpack-notifier')
// const WebpackPluginHTML = require('html-webpack-plugin')

module.exports = [
  // new WebpackHTML({
  //   title: 'DEV',
  //   template: path.join(process.cwd(), './webpack/plugins', 'templates/index.html'),
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
