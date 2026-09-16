import omarPortrait from '../assets/omar.jpg'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/useLanguage'

export function About() {
  const { copy } = useLanguage()
  const about = copy.about

  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" index={about.index} title={about.title} />
        <div className="about-grid">
          <figure className="portrait-frame" data-reveal="image">
            <div className="portrait-image-wrap"><img src={omarPortrait} width="1536" height="2048" alt={about.imageAlt} /></div>
            <figcaption><span dir="ltr">Omar Alloush</span><span dir="ltr">{about.location}</span></figcaption>
          </figure>
          <div className="about-copy" data-reveal="content">
            <p className="lead">{about.lead}</p>
            <div className="about-columns">{about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="principles" aria-label={about.principlesLabel}>{about.principles.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
