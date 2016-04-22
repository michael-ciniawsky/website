import React from 'react'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

import css from './style.css'

class Home extends React.Component {
  render () {
    return (
      <div className={css.home}>
        <h2>Test</h2>
        <Nav />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Home
