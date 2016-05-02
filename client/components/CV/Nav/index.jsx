
import css from './style.css'

const Nav = (props, ctx) => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__list && css.nav__left}>

        <li className={css.nav__item}>
          <a className={css.nav__link} href='#an'>Anschreiben</a>
        </li>

        <li className={css.nav__item}>
          <a className={css.nav__link} href='#ll'>Lebenslauf</a>
          <ul className={css.dropdown}>
            <li className={css.dropdown__item}>Person</li>
            <li className={css.dropdown__item}>Schule</li>
            <li className={css.dropdown__item}>Beruf</li>
          </ul>
        </li>

        <li className={css.nav__item}>
          <a className={css.nav__link} href='#it'>IT</a>
          <ul className={css.dropdown}>
            <li className={css.dropdown__item}>HTML</li>
            <li className={css.dropdown__item}>SVG</li>
            <li className={css.dropdown__item}>CSS</li>
            <li className={css.dropdown__item}>JS</li>
            <li className={css.dropdown__item}>PHP</li>
            <li className={css.dropdown__item}>GO</li>
          </ul>
        </li>

        <li className={css.nav__item}>
          <a className={css.nav__link} href='#it'>IT</a>
        </li>
      </ul>

      <ul className={css.nav__list && css.nav__right}>
        <li className={css.nav__item}>
          <a className={css.nav__link} href='https://xing.com/profile/Michael_Ciniawsky' target='_blank'>
            <i className='fa fa-xing'>Github</i>
          </a>
        </li>

        <li className={css.nav__item}>
          <a className={css.nav__link} href='https://github.com/michael-ciniawsky' target='_blank'>
            <i className='fa fa-github'></i>
          </a>
        </li>

        <li className={css.nav__item}>
          <a className={css.nav__link} href='#'>
            <i className='fa fa-file'></i>
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Nav
