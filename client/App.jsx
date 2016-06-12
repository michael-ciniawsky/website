import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Home from './containers/Home'
import Error from './containers/Error'
import CV from './containers/CV'

import $ from './styles/index.sss'

const Nav = ({ props }) => {
  return (
    <nav className={$.nav}>
      <ul className={$.nav__left}>
        <li className={$.nav__item}>
          <Link to='/'>Home</Link>
        </li>
        <li className={$.nav__item}>
          <Link to='/cv'>Curriculum Vitae</Link>
        </li>
        <li className={$.nav__item}>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <main className={$.root}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/404' component={Error} />
      <IndexRoute component={Home} />
      <Route path='/cv' component={CV} />
    </Route>
  </Router>),
  document.getElementById('root'))
