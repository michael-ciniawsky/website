import React from 'react'
import { Link } from 'react-router'

import css from './style.css'

const Nav = ({props}) => {
  return (
    <nav className={css.nav}>
      <ul>
        {props.map((link) => {
          return (
            <li className={css.nav__link} key={link.id}>
              <Link to='/'>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
