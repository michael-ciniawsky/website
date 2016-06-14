import React from 'react'
import { Link } from 'react-router'

import Dropdown from './Dropdown'

import $ from './style.sss'

const Nav = ({ links, ctx }) => {
  return (
    <nav className={$.nav}>
      <ul className={$.nav__list && $.nav__left}>
        <li className={$.nav__item}>
          <Link className={$.nav__link} to='#an'>{ctx.an}</Link>
        </li>

        <li className={$.nav__item}>
          <Link className={$.nav__link} to='#ll'>{ctx.ll}</Link>
          <Dropdown links={links.ll} />
        </li>

        <li className={$.nav__item}>
          <Link className={$.nav__link} to='#it'>{ctx.it}</Link>
          <Dropdown links={links.it} />
        </li>
      </ul>

      <ul className={$.nav__list}>
        <li className={$.nav__item}>
          <Link className={$.nav__link} to='https://xing.com/profile/Michael_Ciniawsky'>
            <i className='fa fa-xing'>Github</i>
          </Link>
        </li>

        <li className={$.nav__item}>
          <Link className={$.nav__link} to='https://github.com/michael-ciniawsky'>
            <i className='fa fa-github'></i>
          </Link>
        </li>

        <li className={$.nav__item}>
          <Link className={$.nav__link} to='#'>
            <i className='fa fa-file'></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
