import React from 'react'

import Nav from '../../components/CV/Nav'
import IN from '../../components/CV/IN'
import AN from '../../components/CV/AN'
import LL from '../../components/CV/LL'
import IT from '../../components/CV/IT'

import $ from './style.sss'
import ctx from './index.json'

class CV extends React.Component {
  render () {
    return (
      <div className={$.cv}>
        <Nav links={ctx.links} text={ctx.content} />
        <IN />
        <AN />
        <LL />
        <IT />
      </div>
    )
  }
}

CV.propTypes = {
  it: React.PropTypes.object.isRequired,
  ll: React.PropTypes.object.isRequired
}

export default CV
