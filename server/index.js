// ------------------------------------
// #SERVER
// ------------------------------------

'use strict'

const os = require('os')
const cluster = require('cluster')
const express = require('express')

const router = require('./router')
// const logger = require('./middl').logger
const parser = require('./middl').parser
const cookie = require('./middl').cookie
const favicon = require('./middl').favicon
const session = require('./session')

let cores = os.cpus().length

if (cluster.isMaster) {
  for (let i = 0; i < cores; i++) {
    cluster.on('start', (worker, code, signal) => {
      console.log(`Worker ${worker.process.id} started.`)
    })
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.id} died with code/signal ${signal || code}. Restarting worker...`)
    })
    cluster.fork()
  }
} else {
  let app = express()

  // ------------------------------------
  // #SETTINGS
  // ------------------------------------

  app.set('env', process.env.NODE_ENV || 'Development')
  app.set('port', process.env.PORT || 3000)

  // app.use(logger)
  app.use(favicon)
  app.use(parser.url)
  app.use(parser.json)
  app.use(cookie)
  app.use(session)

  // ------------------------------------
  // #VIEWS
  // ------------------------------------

  app.engine('html', require('express-posthtml'))

  app.set('views', `${process.cwd()}/public`)
  app.set('view engine', 'html')
  app.set('view options', [])

  // ------------------------------------
  // #STATIC
  // ------------------------------------

  app.use(express.static(`${process.cwd()}/public`))

  // ------------------------------------
  // #ROUTES
  // ------------------------------------

  app.use('/', router)

  app.listen(app.get('port'), function () {
    console.log(`ENV:${app.get('env')}`)
    console.log(`Server: http://localhost:${app.get('port')}`)
  })
}
