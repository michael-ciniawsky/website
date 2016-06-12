var path = require('path')

module.exports = {
  hot: true,
  port: 3000,
  inline: true,
  colors: true,
  progress: true,
  contentBase: path.join(process.cwd(), 'public')
}
