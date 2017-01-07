import React from 'react'

import IN from '../../components/CV/IN'
import AN from '../../components/CV/AN'
import LL from '../../components/CV/LL'
import IT from '../../components/CV/IT'

import $ from './style.sss'

class CV extends React.Component {
  render () {
    return (
      <div className={$.cv}>
        <IN />
        <AN />
        <LL />
        <IT />
      </div>
    )
  }
}

export default CV
