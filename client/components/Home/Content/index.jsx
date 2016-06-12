import React from 'react'

import css from './style.css'

const Content = ({props}) => {
  return (
    <div className={css.content}>
      {props}
    </div>
  )
}

export default Content
