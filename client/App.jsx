import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// import Home from './containers/Home'
// import Error from './containers/Error'
// import CV from './containers/CV'
//

import Header from './components/Home/Header'
// import Footer from './components/Home/Footer'

import css from './index.css'

// class Root extends React.Component {
//   render () {
//     return (
//       <div className={css.app}>
//         <nav className={css.nav}>
//           <ul className={css.nav__left}>
//             <li className={css.nav__item}><Link to='/'>Root</Link></li>
//             <li className={css.nav__item}><Link to='/home'>Home</Link></li>
//             <li className={css.nav__item}><Link to='/cv'>Curriculum</Link></li>
//             <li className={css.nav__item}><Link to='/404'>Not found</Link></li>
//           </ul>
//         </nav>
//         <Header props='Hello'/>
//         <main>
//           {this.props.children}
//         </main>
//         <Footer />
//       </div>
//     )
//   }
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Test Stateless Components</h1>
      </div>
    )
  }
}

// render((
//   <Router history={browserHistory}>
//     <Route path='/' component={Root}>
//       <Route path='/404' component={Error} />
//       <Route path='/home' component={Home} />
//       <Route path='/cv' component={CV} />
//     </Route>
//   </Router>),
//   document.getElementById('root'))

render(<App />, document.getElementById('root'))
