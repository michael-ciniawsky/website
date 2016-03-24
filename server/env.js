'use strict'

let config = {
  development: {
    mode: 'development',
    port: 3000
  },
  staging: {
    mode: 'staging',
    port: 4000
  },
  production: {
    mode: 'production',
    port: 612345
  }
}

let env = (mode = 'development') => {
  return config[ mode || process.argv[2] ]
}

exports = module.exports = env
