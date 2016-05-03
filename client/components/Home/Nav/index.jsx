import { Component } from 'react'
import { Link } from 'react-router'

import css from './style.css'

// const Nav = (props) => {
//   return (
//     <nav className={css.nav}>
//       <ul>
//         <li className={css.nav__item}><Link to='/home'>Home</Link></li>
//         <li className={css.nav__item}><Link to='/cv'>Curriculum</Link></li>
//       </ul>
//     </nav>
//   )
// }

class Nav extends Component {
  render () {
    return (
      <nav className={css.nav}>
        <ul>
          <li className={css.nav__item}><Link to='/home'>Home</Link></li>
          <li className={css.nav__item}><Link to='/cv'>Curriculum</Link></li>
        </ul>
      </nav>
    )
  }
}
export default Nav
