import {createContext, FC, useEffect, useState} from "react"

export type TLanguage = "danish" | "english"
export type TLocale = "da-dk" | "en-dk"

export interface ILanguageContext {
  language: TLanguage
  locale: TLocale
  change: (newLanguage: TLanguage) => void
}

export const LanguageContext = createContext<ILanguageContext>({
  language: "danish",
  locale: "da-dk",
  change: () => void null,
})

export const LanguageContextProvider: FC = ({children}) => {
  const [language, setLanguage] = useState<TLanguage>("danish")
  const [locale, setLocale] = useState<TLocale>("da-dk")

  useEffect(() => {
    if (language === "danish") {
      setLocale("da-dk")
      document.documentElement.lang = "da"
    }
    else if (language === "english") {
      setLocale("en-dk")
      document.documentElement.lang = "en"
    }
  }, [language])

  const change = (newLanguage: TLanguage) => setLanguage(newLanguage)

  return <LanguageContext.Provider children={children} value={{language, locale, change}}/>
}
