'use strict'

const config = require('.gir/webpack/config')
const entrys = require('.gir/webpack/entrys')
const output = require('.gir/webpack/output')
const modules = require('.gir/webpack/loaders')
const plugins = require('.gir/webpack/plugins')

const PostHTML = require('.gir/webpack/loaders/settings').posthtml
const PostCSS = require('.gir/webpack/loaders/postcss').postcss

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
  postcss: PostCSS,
  posthtml: PostHTML
}
