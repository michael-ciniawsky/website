import React from 'react'

import $ from './style.sss'
import { title, message } from './index.json'

class Error extends React.Component {
  render () {
    return (
      <div className={$.error}>
        <section className={$.error__text}>
          <h1>{title}</h1>
          <p>{message}</p>
        </section>
      </div>
    )
  }
}

export default Error
