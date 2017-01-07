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
          <Link to='/cv'>Curriculum Vitae</Link>
        </li>
      </ul>

      <ul className={$.nav__right}>
        <li className={$.nav__item}>
          <a href='https://github.com/michael-ciniawsky' target='_blank'>
            Github
          </a>
        </li>
        <li className={$.nav__item}>
          <a href='https://xing.com/profile/Michael_Ciniawsky' target='_blank'>
            Xing
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
