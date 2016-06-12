import React from 'react'
import { Link } from 'react-router'

import $ from './style.sss'

const Nav = ({ props }) => {
  return (
    <nav className={$.nav}>
      <ul>
        {props.map((link) => {
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
