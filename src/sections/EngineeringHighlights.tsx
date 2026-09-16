import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/useLanguage'

export function EngineeringHighlights() {
  const { copy } = useLanguage()

  return (
    <section className="section highlights-section" aria-labelledby="highlights-title">
      <div className="container highlights-layout">
        <div className="highlights-intro">
          <SectionHeading id="highlights-title" index={copy.highlights.index} title={copy.highlights.title} description={copy.highlights.description} />
        </div>
        <div className="highlights-list">
          {copy.highlights.items.map((item, index) => (
            <article className="highlight" data-reveal="card" key={`highlight-${index}`}>
              <p className="highlight-number">0{index + 1}</p>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
