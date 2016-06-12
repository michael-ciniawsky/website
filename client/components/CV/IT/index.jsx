import React from 'react'

import css from './style.sss'

const IT = ({ props }) => {
  return (
      <div id='it' className='section'>
        <div id='it-intro' className='slide'>
          <div className={css.it}>
            <header className={css.it__header}>
              <h2 className={css.it__title}>IT</h2>
            </header>
          </div>
        </div>

        <div id='it-html' className='slide'>
          <div className={css.html}>
            <header className={css.header}>
              <img src='/images/html.svg' alt='HTML' />
            </header>

            <article className={css.article}>
              <section className={css.article__section}>Section</section>
              <section className={css.article__chart}>
                <canvas id='html-chart'/>
              </section>
              <section className={css.article__section__full}>Section Full</section>
            </article>
          </div>
        </div>

        <div id='it-svg' className='slide'>
          <div className={css.svg}>
            <header className={css.header}>
              <img src='/images/lion.svg' alt='SVG' />
            </header>

            <article className={css.article}>
              <section className={css.article__section}>Section</section>
              <section className={css.article__chart}>
                <canvas id='svg-chart'/>
              </section>
              <section className={css.article__section__full}>Section Full</section>
            </article>
          </div>
        </div>

        <div id='it-js' className='slide'>
          <div className={css.js}>
            <header className={css.header}>
              <img src='/images/js.svg' alt='JS' />
            </header>

            <article className={css.article}>
              <section className={css.article__section}>Section</section>
              <section className={css.article__chart}>
                <canvas id='svg-chart'/>
              </section>
              <section className={css.article__section__full}>Section Full</section>
            </article>
          </div>
        </div>

        <div id='it-php' className='slide'>
          <div className={css.php}>
            <header className={css.header}>
              <img src='/images/php.svg' alt='PHP' />
            </header>

            <article className={css.article}>
              <section className={css.article__section}>Section</section>
              <section className={css.article__chart}>
                <canvas id='svg-chart'/>
              </section>
              <section className={css.article__section__full}>Section Full</section>
            </article>
          </div>
        </div>
     </div>
  )
}

export default IT
