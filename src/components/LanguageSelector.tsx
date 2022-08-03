import {useContext} from "react"
import {LanguageContext} from "../context/LanguageContext"

export const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext)

  return <div className="d-inline-flex justify-content-between">
    <span className={languageContext.language === "danish" ? "fw-bold orange" : "pointer"}
          style={{width: "2.5ch", textAlign: "center", display: "inline-block"}}
          onClick={() => languageContext.change("danish")}>
      DA
    </span>
    <span>|</span>
    <span className={languageContext.language === "english" ? "fw-bold orange" : "pointer"}
          style={{width: "2.5ch", textAlign: "center", display: "inline-block"}}
          onClick={() => languageContext.change("english")}>
      EN
    </span>
  </div>
}