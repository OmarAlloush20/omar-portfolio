import { useLanguage } from '../i18n/useLanguage'
import type { Language } from '../i18n/translations'

type HeaderProps = { menuOpen: boolean; onMenuToggle: () => void }

const hrefs = ['#about', '#skills', '#work', '#contact']
const languageLabels: Record<Language, string> = { en: 'EN', ar: 'العربية', tr: 'TR' }

export function Header({ menuOpen, onMenuToggle }: HeaderProps) {
  const { language, setLanguage, copy } = useLanguage()

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label={copy.common.homeLabel} dir="ltr">OA<span>.</span></a>
        <nav id="primary-navigation" className={menuOpen ? 'nav is-open' : 'nav'} aria-label={copy.common.navLabel}>
          {copy.common.nav.map((label, index) => <a key={hrefs[index]} href={hrefs[index]} onClick={menuOpen ? onMenuToggle : undefined}>{label}</a>)}
        </nav>
        <div className="header-tools">
          <p className="header-status"><span /> {copy.common.status}</p>
          <div className="language-switcher" aria-label={copy.common.language}>
            {(Object.keys(languageLabels) as Language[]).map((item) => (
              <button type="button" key={item} lang={item} dir={item === 'ar' ? 'rtl' : 'ltr'} aria-pressed={language === item} onClick={() => setLanguage(item)}>{languageLabels[item]}</button>
            ))}
          </div>
        </div>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={onMenuToggle}>
          <span className="sr-only">{copy.common.menu}</span><span /><span />
        </button>
      </div>
    </header>
  )
}
