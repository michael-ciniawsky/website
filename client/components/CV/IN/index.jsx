import React from 'react'

import css from './style.css'

const IN = ({props}) => {
  return (
    <div className={css.in}>
      <header className={css.in__header}>
        <h2 className={css.in__title}>
          Ausbildung zum Fachinformatiker Anwendungsentwicklung
        </h2>
      </header>
    </div>
  )
}

export default IN
