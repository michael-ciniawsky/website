 module.exports = (ctx) => ({
   parser: ctx.webpack.resourcePath.endsWith('.sss') ? 'sugarss' : false,
   plugins: {
     'postcss-import': {},
     'postcss-nested': {},
     'cssnano': ctx.env === 'production' ? {} : false
   }
 })
