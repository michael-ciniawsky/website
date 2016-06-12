import React from 'react'

import css from './style.css'

const Footer = ({props}) => {
  return (
    <footer className={css.footer}>
      <div>{props.test}</div>
      <div>{props.test2}</div>
    </footer>
  )
}

export default Footer
