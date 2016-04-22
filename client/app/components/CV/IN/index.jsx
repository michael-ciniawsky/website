import React from 'react'

import css from './style.css'

class Intro extends React.Component {
  componentDidMount () {}
  render () {
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
}

export default Intro
