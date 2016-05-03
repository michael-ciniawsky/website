import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Error from './containers/Error'
import CV from './containers/CV'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/404' component={Error} />
      <Route path='/home' component={Home} />
      <Route path='/cv' component={CV} />
    </Route>
  </Router>),
  document.getElementById('root'))
