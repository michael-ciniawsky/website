import React from 'react'

import css from './style.css'

class Nav extends React.Component {
  render () {
    return (
      <nav className={css.nav}>
        <ul className={css.nav__left}>
          <li className={css.nav__item}>
            <a className={css.nav__link} href='https://xing.com/profile/Michael_Ciniawsky' target='_blank'>
              <i className='fa fa-xing'></i>
            </a>
          </li>
        </ul>

        <div className={css.nav__center}>
          <a className={css.nav__link} href='#'>Michael Ciniawsky</a>
        </div>

        <ul className={css.nav__right}>
          <li className={css.nav__item}>
            <a className={css.nav__link} href='https://github.com/michael-ciniawsky' target='_blank'>
              <i className='fa fa-github'></i>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
