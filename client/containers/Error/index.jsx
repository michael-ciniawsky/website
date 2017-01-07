import React from 'react'

import $ from './style.sss'

class Error extends React.Component {
  render () {
    return (
      <div className={$.error}>
        <section className={$.error__text}>
          <h1>404</h1>
        </section>
      </div>
    )
  }
}

export default Error
