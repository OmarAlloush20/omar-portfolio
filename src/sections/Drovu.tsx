import { useEffect, useRef, useState } from 'react'
import homeScreenshot from '../assets/drovu/drovu-home.png'
import conversionScreenshot from '../assets/drovu/drovu-conversion.png'
import wheelScreenshot from '../assets/drovu/drovu-wheel.png'
import imageEditorScreenshot from '../assets/drovu/drovu-image-editor.png'
import pdfEditorScreenshot from '../assets/drovu/drovu-pdf-editor.png'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/useLanguage'
import { getNearestStageIndex } from '../utils/getNearestStageIndex'

type DrovuSurfaceAsset = {
  id: string
  image: string
  width: number
  height: number
}

const surfaceAssets: DrovuSurfaceAsset[] = [
  { id: 'home', image: homeScreenshot, width: 944, height: 791 },
  { id: 'conversion', image: conversionScreenshot, width: 937, height: 790 },
  { id: 'wheel', image: wheelScreenshot, width: 341, height: 576 },
  { id: 'image-editor', image: imageEditorScreenshot, width: 937, height: 785 },
  { id: 'pdf-editor', image: pdfEditorScreenshot, width: 941, height: 790 },
]

type DrovuSurface = DrovuSurfaceAsset & {
  label: string
  title: string
  description: string
  alt: string
}

function DrovuMedia({ surface, priority = false }: { surface: DrovuSurface; priority?: boolean }) {
  return (
    <div className={`surface-frame drovu-frame${surface.id === 'wheel' ? ' drovu-frame-wheel' : ''}`}>
      <img
        src={surface.image}
        alt={surface.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={surface.width}
        height={surface.height}
      />
    </div>
  )
}

export function Drovu() {
  const { copy, language } = useLanguage()
  const [activeSurface, setActiveSurface] = useState(0)
  const activeSurfaceRef = useRef(0)
  const stageRefs = useRef<(HTMLElement | null)[]>([])
  const surfaces: DrovuSurface[] = surfaceAssets.map((surface, index) => ({
    ...surface,
    ...copy.drovu.surfaces[index],
  }))

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
    <section className="project-section drovu-section" id="drovu" aria-labelledby="drovu-title">
      <div className="container project-intro-wrap">
        <SectionHeading id="drovu-title" index={copy.drovu.index} title={copy.drovu.heading} />
        <div className="project-intro" data-reveal="content">
          <div>
            <p className="project-label">{copy.drovu.label}</p>
            <h3 dir="ltr">Drovu<span>.</span></h3>
            <p className="project-subtitle">{copy.drovu.subtitle}</p>
          </div>
          <p className="project-description">{copy.drovu.intro}</p>
        </div>
      </div>

      <div className="voltiva-showcase container">
        <div className="showcase-sticky">
          <div className="surface-tabs surface-tabs-five" aria-label={copy.drovu.tabsLabel}>
            {surfaces.map((surface, index) => (
              <button type="button" key={surface.id} aria-pressed={activeSurface === index} onClick={() => selectSurface(index)}>
                <span>0{index + 1}</span>{copy.drovu.tabs[index]}
              </button>
            ))}
          </div>
          <div className="showcase-media" aria-live="polite">
            {surfaces.map((surface, index) => (
              <div
                className={activeSurface === index ? `surface drovu-surface is-active` : 'surface drovu-surface'}
                aria-hidden={activeSurface !== index}
                key={surface.id}
              >
                <DrovuMedia surface={surface} priority={index === 0} />
              </div>
            ))}
            <p className="surface-counter"><span>0{activeSurface + 1}</span> / 05</p>
          </div>
        </div>
        <div className="showcase-stages">
          {surfaces.map((surface, index) => (
            <article
              className={activeSurface === index ? 'showcase-stage is-active' : 'showcase-stage'}
              data-stage={index}
              ref={(node) => { stageRefs.current[index] = node }}
              key={surface.id}
            >
              <p>{surface.label}</p>
              <h4>{surface.title}</h4>
              <p>{surface.description}</p>
              <div className="mobile-surface"><DrovuMedia surface={surface} /></div>
            </article>
          ))}
        </div>
      </div>

      <div className="container project-footer" data-reveal="content">
        <p className="admin-note"><span>{copy.drovu.stackLabel}:</span> <span dir="ltr">{copy.drovu.stack}</span></p>
        <aside className="demo-notice drovu-notice">
          <span>{copy.drovu.statusLabel}</span>
          <p>{copy.drovu.status}</p>
          <p>{copy.drovu.role}</p>
        </aside>
      </div>
    </section>
  )
}
