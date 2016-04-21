'use strict'

exports.posthtml = [
  require('posthtml-bem')({
    elemPrefix: '__',
    modPrefix: '--',
    modDlmtr: '-'
  })
]

exports.postcss = [
  require('postcss-bem')({
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
