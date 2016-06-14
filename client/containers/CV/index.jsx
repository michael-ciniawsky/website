import React from 'react'

import Nav from '../../components/CV/Nav'
import IN from '../../components/CV/IN'
import AN from '../../components/CV/AN'
import LL from '../../components/CV/LL'
import IT from '../../components/CV/IT'

import $ from './style.sss'
import { links, content } from './index.json'

class CV extends React.Component {
  render () {
    return (
      <div className={$.cv}>
        <Nav links={links} content={content}/>
        <IN />
        <AN />
        <LL />
        <IT />
      </div>
    )
  }
}

export default CV
