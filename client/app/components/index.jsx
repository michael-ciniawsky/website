import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/cv'>CV</Link></li>
        </ul>
      </div>
    )
  }
}

export default App
