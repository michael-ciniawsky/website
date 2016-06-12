'use strict'

const config = require('./.webpack/config')
const entrys = require('./.webpack/entrys')
const output = require('./.webpack/output')
const modules = require('./.webpack/loaders')
const plugins = require('./.webpack/plugins')
const server = require('./.webpack/server')

const PostHTML = require('./.webpack/loaders/settings').posthtml
const PostCSS = require('./.webpack/loaders/settings').postcss

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
  postcss: PostCSS,
  posthtml: PostHTML
}
