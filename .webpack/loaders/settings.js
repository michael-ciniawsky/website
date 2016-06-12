'use strict'

// PostHTML Plugins
const bem = require('posthtml-bem')

exports.posthtml = function () {
  return {
    standard: [ bem() ]
  }
}

// PostCSS Syntax
const sugarss = require('sugarss')

// PostCSS Plugins
const $bem = require('postcss-bem')

exports.postcss = function () {
  return {
    parser: sugarss,
    standard: [
      $bem({
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
