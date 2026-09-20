import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useScrollPresentation } from './hooks/useScrollPresentation'
import { useLanguage } from './i18n/useLanguage'
import { About } from './sections/About'
import { ChessReview } from './sections/ChessReview'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { EngineeringHighlights } from './sections/EngineeringHighlights'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'
import { Voltiva } from './sections/Voltiva'
import './styles/site.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { copy, language } = useLanguage()
  useScrollPresentation(language)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.common.skip}</a>
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Voltiva />
        <EngineeringHighlights />
        <ChessReview />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
