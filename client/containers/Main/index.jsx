import React from 'react'

import $ from './style.sss'

const Content = ({ page }) => {
  return (
    <main className={$.main}>
      {page}
    </main>
  )
}

export default Content
