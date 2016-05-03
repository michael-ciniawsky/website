import React from 'react'
import { Link } from 'react-router'

import css from './style.css'

class App extends React.Component {
  render () {
    return (
      <div className={css.app}>
        <nav className={css.nav}>
          <ul className={css.nav__left}>
            <li className={css.nav__item}><Link to='/'>Root</Link></li>
            <li className={css.nav__item}><Link to='/home'>Home</Link></li>
            <li className={css.nav__item}><Link to='/cv'>Curriculum</Link></li>
            <li className={css.nav__item}><Link to='/404'>Not found</Link></li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default App
