module.exports = {
  loaders: [
    {
      test: /\.html$/,
      loader: 'html!posthtml?pack=standard'
    },
    {
      test: /\.css$/,
      loader: 'style!css?modules!postcss?pack=standard'
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.(svg|png|jpg)$/,
      loader: 'url?limit=8192'
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'url?limit=8192'
    }
  ]
}
