import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'

export function Skills() {
  const { copy } = useLanguage()
  const localizedGroups = skillGroups.map((group, index) => ({ ...group, label: copy.skills.groups[index] }))
  const [core, ...supportingGroups] = localizedGroups

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" index={copy.skills.index} title={copy.skills.title} description={copy.skills.description} />
        <div className="core-skills" data-reveal="content">
          <p className="skills-label">{core.label}</p>
          <ul dir="ltr">{core.skills.map((skill, index) => <li key={skill}><span>0{index + 1}</span>{skill}</li>)}</ul>
        </div>
        <div className="supporting-skills">
          {supportingGroups.map((group, index) => (
            <article className="skill-group" data-reveal="card" key={`skill-group-${index + 1}`}>
              <p className="skills-label">{group.label}</p>
              <ul dir="ltr">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
