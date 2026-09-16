import { useEffect, useRef, useState } from 'react'
import adminScreenshot from '../assets/voltiva/admin.png'
import androidScreenshot from '../assets/voltiva/android.jpg'
import customerScreenshot from '../assets/voltiva/customer-web.png'
import { ArrowIcon } from '../components/ArrowIcon'
import { SectionHeading } from '../components/SectionHeading'
import { links } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { getNearestStageIndex } from '../utils/getNearestStageIndex'

type SurfaceAsset = {
  id: string
  image?: string
  frame: 'browser' | 'phone' | 'architecture'
}

const surfaceAssets: SurfaceAsset[] = [
  { id: 'customer', image: customerScreenshot, frame: 'browser' },
  { id: 'admin', image: adminScreenshot, frame: 'browser' },
  { id: 'android', image: androidScreenshot, frame: 'phone' },
  { id: 'backend', frame: 'architecture' },
]

type Surface = SurfaceAsset & { label: string; title: string; description: string; alt: string }

function SurfaceMedia({ surface, priority = false }: { surface: Surface; priority?: boolean }) {
  const { copy } = useLanguage()
  if (surface.frame === 'architecture') {
    return (
      <div className="architecture-visual" aria-label={copy.voltiva.architectureLabel}>
        <div className="architecture-clients" dir="ltr"><span>Web</span><span>Admin</span><span>Android</span></div>
        <div className="architecture-line" aria-hidden="true" />
        <div className="architecture-core"><small>{copy.voltiva.authority}</small><strong>TypeScript / Express</strong><span>{copy.voltiva.responsibilities}</span></div>
        <div className="architecture-line" aria-hidden="true" />
        <div className="architecture-providers" aria-label={copy.voltiva.providersLabel} dir="ltr">
          <span>MongoDB / Mongoose</span><span>Stripe</span><span>Cloudinary</span><span>Gemini</span><span>Expo / FCM</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`surface-frame surface-frame-${surface.frame}`}>
      {surface.frame === 'browser' && <div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>voltiva</span></div>}
      {surface.frame === 'phone' && <div className="phone-chrome" aria-hidden="true" />}
      <img
        src={surface.image}
        alt={surface.alt ?? ''}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={surface.frame === 'phone' ? 1268 : 1900}
        height={surface.frame === 'phone' ? 2624 : 950}
      />
    </div>
  )
}

export function Voltiva() {
  const { copy, language } = useLanguage()
  const [activeSurface, setActiveSurface] = useState(0)
  const activeSurfaceRef = useRef(0)
  const stageRefs = useRef<(HTMLElement | null)[]>([])
  const surfaces: Surface[] = surfaceAssets.map((surface, index) => ({ ...surface, ...copy.voltiva.surfaces[index] }))

  useEffect(() => {
    let frame = 0

    const updateActiveSurface = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const viewportAnchor = window.innerHeight * 0.5
        const stageCenters = stageRefs.current.map((stage) => {
          if (!stage) return Number.POSITIVE_INFINITY
          const bounds = stage.getBoundingClientRect()
          return bounds.top + bounds.height / 2
        })
        const nextSurface = getNearestStageIndex(stageCenters, viewportAnchor, activeSurfaceRef.current)

        if (nextSurface !== activeSurfaceRef.current) {
          activeSurfaceRef.current = nextSurface
          setActiveSurface(nextSurface)
        }
      })
    }

    updateActiveSurface()
    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(updateActiveSurface) : null
    stageRefs.current.forEach((stage) => {
      if (stage) resizeObserver?.observe(stage)
    })
    window.addEventListener('scroll', updateActiveSurface, { passive: true })
    window.addEventListener('resize', updateActiveSurface)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      window.removeEventListener('scroll', updateActiveSurface)
      window.removeEventListener('resize', updateActiveSurface)
    }
  }, [language])

  const selectSurface = (index: number) => {
    stageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="project-section" id="work" aria-labelledby="work-title">
      <div className="container project-intro-wrap">
        <SectionHeading id="work-title" index={copy.voltiva.index} title={copy.voltiva.heading} />
        <div className="project-intro" data-reveal="content">
          <div><p className="project-label">{copy.voltiva.label}</p><h3 dir="ltr">Voltiva<span>.</span></h3><p className="project-subtitle">{copy.voltiva.subtitle}</p></div>
          <p className="project-description">{copy.voltiva.intro}</p>
        </div>
      </div>

      <div className="voltiva-showcase container">
        <div className="showcase-sticky">
          <div className="surface-tabs" aria-label={copy.voltiva.tabsLabel}>
            {surfaces.map((surface, index) => (
              <button type="button" key={surface.id} aria-pressed={activeSurface === index} onClick={() => selectSurface(index)}>
                <span>0{index + 1}</span>{copy.voltiva.tabs[index]}
              </button>
            ))}
          </div>
          <div className="showcase-media" aria-live="polite">
            {surfaces.map((surface, index) => (
              <div className={activeSurface === index ? `surface surface-${surface.id} is-active` : `surface surface-${surface.id}`} aria-hidden={activeSurface !== index} key={surface.id}>
                <SurfaceMedia surface={surface} priority={index === 0} />
              </div>
            ))}
            <p className="surface-counter"><span>0{activeSurface + 1}</span> / 04</p>
          </div>
        </div>
        <div className="showcase-stages">
          {surfaces.map((surface, index) => (
            <article className={activeSurface === index ? 'showcase-stage is-active' : 'showcase-stage'} data-stage={index} ref={(node) => { stageRefs.current[index] = node }} key={surface.id}>
              <p>{surface.label}</p><h4>{surface.title}</h4><p>{surface.description}</p>
              <div className="mobile-surface"><SurfaceMedia surface={surface} /></div>
            </article>
          ))}
        </div>
      </div>

      <div className="container project-footer" data-reveal="content">
        <div className="project-actions">
          <a className="button button-primary" href={links.liveStore} target="_blank" rel="noreferrer">{copy.voltiva.live} <ArrowIcon /></a>
          <a className="button button-secondary" href={links.source} target="_blank" rel="noreferrer">{copy.voltiva.source} <ArrowIcon /></a>
          <a className="button button-secondary" href={links.admin} target="_blank" rel="noreferrer" aria-describedby="admin-note">{copy.voltiva.admin} <ArrowIcon /></a>
          {links.androidApk && <a className="button button-secondary" href={links.androidApk} target="_blank" rel="noreferrer">{copy.voltiva.apk} <ArrowIcon /></a>}
        </div>
        <p id="admin-note" className="admin-note">{copy.voltiva.adminNote}</p>
        <aside className="demo-notice">
          <span>{copy.voltiva.demoLabel}</span>
          <p>{copy.voltiva.demo}</p>
          <p>{copy.voltiva.demoMeta}</p>
        </aside>
      </div>
    </section>
  )
}
