'use strict'

// PostHTML Plugins
let bem = require('posthtml-bem')

exports.posthtml = function () {
  return {
    standard: [ bem() ]
  }
}

// PostCSS Plugins
let $bem = require('postcss-bem')

exports.postcss = function () {
  return {
    standard: [
      $bem({
        defaultNamespace: undefined,
        style: 'bem',
        separators: {
          descendent: '__',
          modifier: '--'
        },
        shortcuts: {
          descendent: 'block',
          utility: 'util'
        }
      })
    ]
  }
}
