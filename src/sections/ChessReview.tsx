import { useEffect, useRef, useState } from 'react'
import androidAnalysisScreenshot from '../assets/chess-review/android-analysis.png'
import exploreAnalysisScreenshot from '../assets/chess-review/explore-analysis-desktop.png'
import gameReviewScreenshot from '../assets/chess-review/game-review-desktop.png'
import { ArrowIcon } from '../components/ArrowIcon'
import { SectionHeading } from '../components/SectionHeading'
import { links } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { getNearestStageIndex } from '../utils/getNearestStageIndex'

type ReviewSurfaceAsset = {
  id: string
  image: string
  frame: 'browser' | 'phone'
}

const reviewSurfaceAssets: ReviewSurfaceAsset[] = [
  { id: 'game-review', image: gameReviewScreenshot, frame: 'browser' },
  { id: 'explore', image: exploreAnalysisScreenshot, frame: 'browser' },
  { id: 'android', image: androidAnalysisScreenshot, frame: 'phone' },
]

type ReviewSurface = ReviewSurfaceAsset & { label: string; title: string; description: string; alt: string }

function ReviewMedia({ surface, priority = false }: { surface: ReviewSurface; priority?: boolean }) {
  return (
    <div className={`surface-frame surface-frame-${surface.frame}`} aria-label={surface.alt}>
      {surface.frame === 'browser' && <div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>chess-review</span></div>}
      {surface.frame === 'phone' && <div className="phone-chrome" aria-hidden="true" />}
      <img
        src={surface.image}
        alt={surface.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={surface.frame === 'phone' ? 1268 : 1900}
        height={surface.frame === 'phone' ? 2624 : 950}
      />
    </div>
  )
}

export function ChessReview() {
  const { copy, language } = useLanguage()
  const [activeSurface, setActiveSurface] = useState(0)
  const activeSurfaceRef = useRef(0)
  const stageRefs = useRef<(HTMLElement | null)[]>([])
  const surfaces: ReviewSurface[] = reviewSurfaceAssets.map((surface, index) => ({ ...surface, ...copy.chessReview.surfaces[index] }))

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
    <section className="project-section" id="chess-review" aria-labelledby="chess-review-title">
      <div className="container project-intro-wrap">
        <SectionHeading id="chess-review-title" index={copy.chessReview.index} title={copy.chessReview.heading} />
        <div className="project-intro" data-reveal="content">
          <div><p className="project-label">{copy.chessReview.label}</p><h3 dir="ltr">Chess Review<span>.</span></h3><p className="project-subtitle">{copy.chessReview.subtitle}</p></div>
          <p className="project-description">{copy.chessReview.intro}</p>
        </div>
      </div>

      <div className="voltiva-showcase container">
        <div className="showcase-sticky">
          <div className="surface-tabs surface-tabs-three" aria-label={copy.chessReview.tabsLabel}>
            {surfaces.map((surface, index) => (
              <button type="button" key={surface.id} aria-pressed={activeSurface === index} onClick={() => selectSurface(index)}>
                <span>0{index + 1}</span>{copy.chessReview.tabs[index]}
              </button>
            ))}
          </div>
          <div className="showcase-media" aria-live="polite">
            {surfaces.map((surface, index) => (
              <div className={activeSurface === index ? `surface surface-${surface.id} is-active` : `surface surface-${surface.id}`} aria-hidden={activeSurface !== index} key={surface.id}>
                <ReviewMedia surface={surface} priority={index === 0} />
              </div>
            ))}
            <p className="surface-counter"><span>0{activeSurface + 1}</span> / 03</p>
          </div>
        </div>
        <div className="showcase-stages">
          {surfaces.map((surface, index) => (
            <article className={activeSurface === index ? 'showcase-stage is-active' : 'showcase-stage'} data-stage={index} ref={(node) => { stageRefs.current[index] = node }} key={surface.id}>
              <p>{surface.label}</p><h4>{surface.title}</h4><p>{surface.description}</p>
              <div className="mobile-surface"><ReviewMedia surface={surface} /></div>
            </article>
          ))}
        </div>
      </div>

      <div className="container project-footer" data-reveal="content">
        <div className="project-actions">
          <a className="button button-primary" href={links.chessReview.live} target="_blank" rel="noreferrer">{copy.chessReview.live} <ArrowIcon /></a>
          <a className="button button-secondary" href={links.chessReview.source} target="_blank" rel="noreferrer">{copy.chessReview.source} <ArrowIcon /></a>
          <a className="button button-secondary" href={links.chessReview.androidApk} target="_blank" rel="noreferrer">{copy.chessReview.apk} <ArrowIcon /></a>
        </div>
        <p className="admin-note"><span>{copy.chessReview.stackLabel}:</span> <span dir="ltr">{copy.chessReview.stack}</span></p>
      </div>
    </section>
  )
}
