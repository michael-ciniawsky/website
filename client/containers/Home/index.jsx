import React from 'react'

import Nav from '../../components/Home/Nav'
import Header from '../../components/Home/Header'
import Content from '../../components/Home/Content'
import Footer from '../../components/Home/Footer'

import $ from './style.sss'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  handleClick (state) {
    console.log(state)
  }

  render () {
    return (
      <div className={$.home}>
        <Nav />
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default Home
