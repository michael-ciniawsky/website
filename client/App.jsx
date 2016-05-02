import React from 'react'
import {render} from 'react-dom'

// import Router from './Router'

class App extends React.Component {
  render () {
    return (
      <div className='app'>App</div>
    )
  }
}

render(<App />, document.getElementById('root'))
