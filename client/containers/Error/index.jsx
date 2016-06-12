import React from 'react'

import $ from './style.sss'

class Error extends React.Component {
  render () {
    return (
      <div className={$.error}>
        <section className={$.error__text}>
          <h1>404 | Page Not Found</h1>
          <p>Sorry, but the page you were trying to view does not exist.</p>
        </section>
      </div>
    )
  }
}

export default Error
