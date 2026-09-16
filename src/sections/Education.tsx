import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/useLanguage'

export function Education() {
  const { copy } = useLanguage()
  const education = copy.education

  return (
    <section className="section education-section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" index={education.index} title={education.title} />
        <div className="background-grid">
          <article className="education-card" data-reveal="card">
            <p className="detail-label">{education.education}</p>
            <div className="education-row">
              <div><h3>{education.university}</h3><p>{education.degree}</p></div>
              <div className="education-meta"><p>{education.country}</p><p dir="ltr">{education.years}</p></div>
            </div>
          </article>
          <article className="language-card" data-reveal="card">
            <p className="detail-label">{education.languages}</p>
            <dl>{education.rows.map((row) => <div key={row.name}><dt>{row.name}</dt><dd>{row.level}</dd></div>)}</dl>
          </article>
        </div>
      </div>
    </section>
  )
}
