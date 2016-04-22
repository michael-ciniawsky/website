var path = require('path')

module.exports = {
  cache: true,
  context: path.join(process.cwd(), 'client'),
  resolve: {
    extensions: ['', 'html', '.js', '.jsx']
  },
  devtool: 'eval-source-map'
}
