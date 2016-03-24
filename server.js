// ------------------------------------
// #SERVER
// ------------------------------------

'use strict'

let os = require('os')
let cluster = require('cluster')
let express = require('express')

let router = require('./server/router')
let logger = require('./server/middle').logger
let parser = require('./server/middle').parser
let cookie = require('./server/middle').cookie
let favicon = require('./server/middle').favicon
let session = require('./server/session')

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

  app.set('mode', process.env.NODE_ENV || 'Development')
  app.set('port', process.env.PORT || 3000)

  app.use(logger)
  app.use(favicon)
  app.use(parser.url)
  app.use(parser.json)
  app.use(cookie)
  app.use(session)

  // ------------------------------------
  // #VIEWS
  // ------------------------------------

  app.engine('html', require('express-posthtml'))

  app.set('views', __dirname + '/public')
  app.set('view engine', 'html')
  app.set('view options', [])

  // ------------------------------------
  // #STATIC
  // ------------------------------------

  app.use(express.static(__dirname + '/public'))

  // ------------------------------------
  // #ROUTES
  // ------------------------------------

  app.use('/', router)

  app.listen(app.get('port'), function () {
    console.info('ENV: ' + app.get('mode'))
    console.info('Server: http://localhost:' + app.get('port'))
  })
}
