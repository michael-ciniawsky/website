import React from 'react'

import Nav from '../../components/Home/Nav'
import Header from '../../components/Home/Header'
import Content from '../../components/Home/Content'
import Footer from '../../components/Home/Footer'

import css from './style.css'

let props = {
  nav: [
    {id: 1, name: 'Home'},
    {id: 2, name: 'CV'}
  ],
  header: 'Header',
  content: 'Content',
  footer: {
    test: 'Test',
    test2: 'Test 2'
  }
}

class Home extends React.Component {
  render () {
    return (
      <div className={css.home}>
        <Nav props={props.nav}/>
        <Header props={props.header} />
        <Content props={props.content} />
        <Footer props={props.footer} />
      </div>
    )
  }
}

export default Home
