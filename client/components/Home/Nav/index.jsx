import React from 'react'
import { Link } from 'react-router'

import $ from './style.sss'

const Nav = ({ links }) => {
  links = [{id: 1, name: 'One'}, {id: 1, name: 'Two'}, {id: 1, name: 'Three'}]
  return (
    <nav className={$.nav}>
      <ul className={$.nav__inner}>
        {links.map((link) => {
          return (
            <li className={$.nav__item} key={link.id}>
              <Link to='/'>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
