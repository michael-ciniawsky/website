import React from 'react'
import { render } from 'react-dom'
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
//
// import Root from './containers/Root'
// import Home from './containers/Home'
// import Error from './containers/Error'
// import CV from './containers/CV'
//
// render((
//   <Router history={browserHistory}>
//     <Route path='/' component={Root}>
//       <Route path='/404' component={Error} />
//       <Route path='/home' component={Home} />
//       <Route path='/cv' component={CV} />
//     </Route>
//   </Router>),
//   document.getElementById('root'))

import Header from './components/Home/Header'
// import Footer from './components/Home/Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Functional Componets</h1>
        <Header header='Hello' />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
