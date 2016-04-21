'use strict'

let path = require('path')

let serve_favicon = require('serve-favicon')

let favicon = serve_favicon(path.join('public', 'favicon.ico'))

exports = module.exports = favicon
