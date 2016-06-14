import React from 'react'

import $ from './style.sss'

const AN = () => {
  return (
    <div className={$.an}>
      <header className={$.an__header}>
        <h2 className={$.an__title}>Anschreiben</h2>
      </header>

      <article className={$.an__article}>
        <header className={$.article__header}>
          <h2 className={$.article__title}>
            Fachinformtatiker Anwendungsentwicklung
          </h2>
        </header>

        <section className={$.article__content}>
          <p>
            Bewerbung zum Fachinformatiker Anwendungsentwicklung
          </p>
        </section>
      </article>
    </div>
  )
}

export default AN
