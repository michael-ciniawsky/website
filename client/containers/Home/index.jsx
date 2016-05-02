import React from 'react'

import Nav from '../../components/Home/Nav'
import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer'

import css from './style.css'

class Home extends React.Component {
  render () {
    return (
      <div className={css.home}>
        <Nav />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Home
