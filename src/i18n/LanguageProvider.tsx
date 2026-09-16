import { useLayoutEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './language-context'
import { translations, type Language } from './translations'

const STORAGE_KEY = 'omar-portfolio-language'

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'ar' || stored === 'tr' || stored === 'en' ? stored : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const copy = translations[language]

  useLayoutEffect(() => {
    const direction = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    document.documentElement.dir = direction
    document.title = copy.meta.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', copy.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // The interface still works when storage is unavailable.
    }
  }, [copy.meta.description, copy.meta.title, language])

  return <LanguageContext.Provider value={{ language, setLanguage, copy }}>{children}</LanguageContext.Provider>
}
