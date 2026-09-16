import { ArrowIcon } from '../components/ArrowIcon'
import { links } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'

export function Hero() {
  const { copy } = useLanguage()

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="hero-name" id="hero-title" dir="ltr">
            <span className="hero-title-line"><span>Omar</span></span>
            <span className="hero-title-line"><span>Alloush.</span></span>
          </h1>
          <p className="hero-role">{copy.hero.role}</p>
          <p className="hero-summary">{copy.hero.summary}</p>
          <div className="button-row">
            <a className="button button-primary" href="#work">{copy.hero.view} <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a className="text-link" href={links.liveStore} target="_blank" rel="noreferrer">{copy.hero.live} <ArrowIcon /></a>
          </div>
        </div>
        <aside className="hero-focus" aria-label={copy.hero.focusAria}>
          <p className="hero-focus-label">{copy.hero.focusLabel}</p>
          <ol>{copy.hero.focus.map((item) => <li key={item}>{item}</li>)}</ol>
          <p className="hero-scroll-cue"><span /> {copy.hero.scroll}</p>
        </aside>
      </div>
    </section>
  )
}
