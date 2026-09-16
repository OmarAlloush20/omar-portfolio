import { createContext } from 'react'
import type { translations, Language } from './translations'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  copy: (typeof translations)[Language]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
