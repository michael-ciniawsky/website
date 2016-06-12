import React from 'react'
import { Link } from 'react-router'

import Dropdown from './Dropdown'

import $ from './style.css'

const Nav = ({links, text}) => {
  return (
    <nav className={$.nav}>
      <ul className={$.nav__list && $.nav__left}>
        <li className={$.nav__item}>
          <a className={$.nav__link} href='#an'>{text.an}</a>
        </li>

        <li className={$.nav__item}>
          <a className={$.nav__link} href='#ll'>{text.ll}</a>
          <Dropdown links={links.ll} />
        </li>

        <li className={$.nav__item}>
          <a className={$.nav__link} href='#it'>{text.it}</a>
          <Dropdown links={links.it} />
        </li>
      </ul>

      <ul className={$.nav__list && $.nav__right}>
        <li className={$.nav__item}>
          <a className={$.nav__link} href='https://xing.com/profile/Michael_Ciniawsky' target='_blank'>
            <i className='fa fa-xing'>Github</i>
          </a>
        </li>

        <li className={$.nav__item}>
          <a className={$.nav__link} href='https://github.com/michael-ciniawsky' target='_blank'>
            <i className='fa fa-github'></i>
          </a>
        </li>

        <li className={$.nav__item}>
          <a className={$.nav__link} href='#'>
            <i className='fa fa-file'></i>
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Nav
