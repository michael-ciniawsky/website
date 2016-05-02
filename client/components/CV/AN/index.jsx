
import css from './style.css'

const AN = (props, ctx) => {
  return (
    <div className={css.an}>
      <header className={css.an__header}>
        <h2 className={css.an__title}>Anschreiben</h2>
      </header>

      <article className={css.an__article}>

        <header className={css.article__header}>
          <h2 className={css.article__title}>Fachinformtatiker Anwendungsentwicklung</h2>
        </header>

        <section className={css.article__content}>
          <p>Bewerbung zum Fachinformatiker Anwendungsentwicklung</p>
        </section>
      </article>
    </div>
  )
}

export default AN
