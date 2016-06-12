import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Home from './containers/Home'
import Error from './containers/Error'
import CV from './containers/CV'

import css from './styles/index.css'

const Nav = ({ props }) => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__left}>
        <li className={css.nav__item}><Link to='/'>Home</Link></li>
        <li className={css.nav__item}><Link to='/cv'>CV</Link></li>
      </ul>
    </nav>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <main className={css.app}>
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
