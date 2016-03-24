'use strict'

let body_parser = require('body-parser')

let parser = {
  url: body_parser.urlencoded({extended: false}),
  json: body_parser.json()
}

exports = module.exports = parser
