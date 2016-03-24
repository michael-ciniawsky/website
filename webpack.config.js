'use strict'

var config = require('.gir/webpack/config')
var entrys = require('.gir/webpack/entrys')
var output = require('.gir/webpack/output')
var modules = require('.gir/webpack/loaders')
var plugins = require('.gir/webpack/plugins')
var server = require('.gir/webpack/server')

var postHTML = require('.gir/webpack/loaders/posthtml')
var postCSS = require('.gir/webpack/loaders/postcss')

console.log(`CWD: ${process.cwd()}`)
console.log(`ENV: ${process.env.NODE_ENV}`)

module.exports = {
  cache: config.cache,
  context: config.context,
  resolve: config.resolve,
  devtool: config.devtool,
  entry: entrys,
  output: output,
  module: modules,
  plugins: plugins,
  devServer: server,
  postcss: postCSS,
  posthtml: postHTML
}
