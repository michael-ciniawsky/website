import React from 'react'

import $ from './style.sss'

const Content = ({ page }) => {
  return (
    <main className={$.app__main}>
      {page}
    </main>
  )
}

export default Content
