module.exports = {
  rules: [
    {
      test: /\.sss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: true, importLoaders: 1 }
        },
        'postcss-loader'
      ]
    },
    {
      test: /\.(js|jsx)$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      use: [
        'json-loader'
      ]
    },
    {
      test: /\.(svg|png|jpg|woff|woff2|eot|ttf|otf)$/,
      use: [
        { loader: 'url-loader', options: { limit: 8192 } }
      ]
    }
  ]
}
