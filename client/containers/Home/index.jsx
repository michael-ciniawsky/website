import React from 'react'

import Nav from '../../components/Home/Nav'
import Header from '../../components/Home/Header'
import Content from '../../components/Home/Content'
import Footer from '../../components/Home/Footer'

import $ from './style.sss'
import { links } from './index.json'

class Home extends React.Component {
  render () {
    return (
      <div className={$.home}>
        <Nav links={links} />
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default Home
