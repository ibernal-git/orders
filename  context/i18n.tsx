import { useRouter } from 'next/router'
import { createContext, useCallback, useContext, ReactNode } from 'react'
import es from '../translations/es.json'
import en from '../translations/en.json'

interface contextProp {
  t(key: string, ...args: any[]): string;
}

type languageType = {
  [key: string]: any
}

type Props = {
  children?: ReactNode,
};

const I18NContext = createContext({} as contextProp)
const languages = { es, en } as languageType

export function I18NProvider ({ children }: Props) {
  const { locale } = useRouter()
  const t = useCallback((key: string, ...args): string => {
    if (typeof locale === 'undefined') return languages.en[key]
    let translation = languages[locale][key]
    if (args.length === 0) return translation

    args.forEach((value, index) => {
      translation = translation.replace(`%${index + 1}`, value)
    })
    return translation
  }, [locale])
  return (
    <I18NContext.Provider value={{ t }}>
      {children}
    </I18NContext.Provider>
  )
}

export function useI18N () {
  const context = useContext(I18NContext)
  if (!context) {
    throw new Error('useI18N must be used within a I18NProvider')
  }
  return context
}
