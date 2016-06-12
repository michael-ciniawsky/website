import React from 'react'

import Nav from '../../components/CV/Nav'
import IN from '../../components/CV/IN'
import AN from '../../components/CV/AN'
import LL from '../../components/CV/LL'
import IT from '../../components/CV/IT'

import $ from './style.css'

let nav = {
  links: {
    ll: [
      {id: 1, name: 'Person'},
      {id: 2, name: 'Schule'},
      {id: 3, name: 'Beruf'}
    ],
    it: [
      {id: 1, name: 'HTML'},
      {id: 2, name: 'CSS'},
      {id: 3, name: 'SVG'},
      {id: 4, name: 'JS'},
      {id: 5, name: 'GO'}
    ]
  },
  text: {
    an: 'Anschreiben',
    ll: 'Lebenslauf',
    it: 'IT'
  }
}

class CV extends React.Component {
  render () {
    return (
      <div className={$.cv}>
        <Nav links={nav.links} text={nav.text} />
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
