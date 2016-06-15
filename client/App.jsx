import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Nav from './containers/Nav'
import Main from './containers/Main'

import Home from './containers/Home'
import Error from './containers/Error'
import CV from './containers/CV'

import $ from './App.sss'

class App extends React.Component {
  render () {
    return (
      <div className={$.app}>
        <Nav />
        <Main page={this.props.children} />
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/*' component={Error} />
      <IndexRoute component={Home} />
      <Route path='/cv' component={CV} />
    </Route>
  </Router>),
  document.getElementById('root'))
