import React from 'react'

import Nav from '../../components/CV/Nav'
import IN from '../../components/CV/IN'
import AN from '../../components/CV/AN'
import LL from '../../components/CV/LL'
import IT from '../../components/CV/IT'

import css from './style.css'

class CV extends React.Component {
  render () {
    return (
      <div className={css.cv}>
        <Nav />
        <IN />
        <AN />
        <LL />
        <IT />
      </div>
    )
  }
}

export default CV
