import React from 'react'
import { Router, Route, IndexRoute , createBrowserHistory} from 'react-router'

import App from './components'
import Home from './components/Home'
import Error from './components/Error'
import CV from './components/CV'

let history = createBrowserHistory()

let routes = (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='*' component={Error} />
      <IndexRoute component={Home} />
      <Route path='cv' component={CV} />
    </Route>
  </Router>
)

export default routes
