import { useLanguage } from '../i18n/useLanguage'

export function Footer() {
  const { copy } = useLanguage()
  return <footer className="footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} Omar Alloush</p><p>{copy.common.built}</p><a href="#top">{copy.common.backToTop}</a></div></footer>
}
