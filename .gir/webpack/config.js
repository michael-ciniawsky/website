var path = require('path')

module.exports = {
  cache: true,
  context: path.join(process.cwd(), 'client'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
