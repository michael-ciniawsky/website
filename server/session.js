// ------------------------------------
// #SESSION
// ------------------------------------

'use strict'

let Session = require('express-session')

let session = Session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
})

exports = module.exports = session
