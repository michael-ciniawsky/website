// ------------------------------------
// # SESSION
// ------------------------------------

const Session = require('express-session')

const session = Session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
})

module.exports = session
