// ------------------------------------
// #ROUTES
// ------------------------------------

'use strict'

let express = require('express')

let router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/cv', (req, res) => {
  res.render('cv')
})

exports = module.exports = router
