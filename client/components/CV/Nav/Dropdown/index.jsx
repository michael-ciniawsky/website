import React from 'react'
import { Link } from 'react-router'

import $ from './style.css'

const Dropdown = ({links}) => {
  return (
    <ul className={$.dropdown}>
      {links.map((link) => {
        return (
          <li className={$.dropdown__item} key={link.id}>
            <Link to='/cv'>{link.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Dropdown
