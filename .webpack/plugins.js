const NotifyPlugin = require('webpack-notifier')
const { CommonsChunkPlugin } = require('webpack').optimize
const { NoErrorsPlugin, HotModuleReplacementPlugin } = require('webpack')

module.exports = [
  new NotifyPlugin(),
  new NoErrorsPlugin(),
  new HotModuleReplacementPlugin(),
  new CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].js',
    chunks: ['App'],
    minChunks: Infinity
  }),
  // UglifyJsPlugin({
  //   compress: { warnings: false },
  //   output: { comments: false },
  //   sourceMap: false
  // }),
]
