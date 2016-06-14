import React from 'react'
import { Link } from 'react-router'

import $ from './index.sss'

const Nav = () => {
  return (
    <nav className={$.nav}>
      <ul className={$.nav__left}>
        <li className={$.nav__item}>
          <Link to='/'>Home</Link>
        </li>
        <li className={$.nav__item}>
          <Link to='/blog'>Blog</Link>
        </li>
        <li className={$.nav__item}>
          <Link to='/cv'>Curriculum Vitae</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
