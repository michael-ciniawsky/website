module.exports = {
  target: 'web',
  cache: false,
  context: `${process.cwd()}/client`,
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
