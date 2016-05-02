import React from 'react'
import { Router, Route, IndexRoute, createBrowserHistory} from 'react-router'

import Home from './containers/Home'
import Error from './containers/Error'
import CV from './containers/CV'

let history = createBrowserHistory()

const Routes = (
  <Router history={history}>
    <Route path='/' component={Home}>
      <Route path='*' component={Error} />
      <IndexRoute component={Home} />
      <Route path='cv' component={CV} />
    </Route>
  </Router>
)

export default Routes
