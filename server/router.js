// ------------------------------------
// # ROUTER
// ------------------------------------

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/cv', (req, res) => {
  res.render('cv')
})

module.exports = router
