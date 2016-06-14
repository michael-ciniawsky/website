import React from 'react'
import { Link } from 'react-router'

import $ from './style.sss'

const Nav = ({ links }) => {
  return (
    <nav className={$.nav}>
      <ul>
        {links.map((link) => {
          return (
            <li className={$.nav__link} key={link.id}>
              <Link to='/'>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
