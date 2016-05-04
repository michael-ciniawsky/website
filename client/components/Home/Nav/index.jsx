import { Link } from 'react-router'

export function Nav (props) {
  return (
    <nav className='nav'>
      <ul>
        <li className='nav__link'><Link to='/home'>Home</Link></li>
        <li className='nav__link'><Link to='/cv'>Curriculum</Link></li>
      </ul>
    </nav>
  )
}
