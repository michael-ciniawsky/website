const body = require('body-parser')
const cookie = require('cookie-parser')

exports.body = {
  url: body.urlencoded({ extended: false }),
  json: body.json()
}

exports.cookie = cookie()
