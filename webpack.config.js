// ------------------------------------
// #WEBPACK CONFIG
// ------------------------------------

const env = process.env.NODE_ENV

const config = require('./.webpack/config')
const entrys = require('./.webpack/entrys')
const output = require('./.webpack/output')
const modules = require('./.webpack/modules')
const plugins = require('./.webpack/plugins')
const server = require('./.webpack/server')

module.exports = () => ({
  target: config.target,
  cache: config.cache,
  devtool: config.devtool,
  context: config.context,
  resolve: config.resolve,
  entry: entrys,
  output: output,
  module: modules,
  plugins: plugins,
  performance: env === 'development' ? { hints: false } : {},
  devServer: env === 'development' ? server : {}
})
