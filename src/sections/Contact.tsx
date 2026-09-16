import { ArrowIcon } from '../components/ArrowIcon'
import { links } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'

export function Contact() {
  const { copy } = useLanguage()

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-grid" data-reveal="content">
        <p className="contact-index">{copy.contact.index}</p>
        <div className="contact-copy">
          <h2 id="contact-title">{copy.contact.titleLine1}<br />{copy.contact.titleLine2}<span>.</span></h2>
          <p>{copy.contact.text}</p>
        </div>
        <div className="contact-actions" dir="ltr">
          <a className="contact-email" href={links.email}>omarzabadani1@gmail.com <ArrowIcon /></a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub / OmarAlloush20 <ArrowIcon /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn / Omar Alloush <ArrowIcon /></a>
        </div>
      </div>
    </section>
  )
}
