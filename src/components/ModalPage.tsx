import {FC, useContext} from "react"
import {Modal} from "react-bootstrap"
import {colors} from "../colors"
import {HistoryContext} from "../context/HistoryContext"
import {LanguageContext, TLanguage} from "../context/LanguageContext"
import {LanguageSelector} from "./LanguageSelector"

interface IProps {
  title: Record<TLanguage, string>
  headerTitle?: Record<TLanguage, string | JSX.Element>
}

export const ModalPage: FC<IProps> = ({children, title, headerTitle}) => {
  const languageContext = useContext(LanguageContext)
  const historyContext = useContext(HistoryContext)

  document.title = `MVMF 2022 | ${title[languageContext.language]}`

  return <Modal className="modal-page" fullscreen={true} backdrop={false} scrollable={true} show>
    <Modal.Header className="p-2 border-0 container">
      <div className="d-inline">
        <div className="d-inline-block pointer" onClick={() => historyContext.goBack()}>
          <svg viewBox="0 0 64 64" fill={colors.au7comp} style={{width: "2.375rem", height: "2.375rem"}}>
            <path
              d="M38.454 13.627a2 2 0 00-2.827-.081l-18 17a2.001 2.001 0 000 2.908l18 17c.386.365.88.546 1.373.546a2 2 0 001.374-3.454L21.913 32l16.46-15.546a2 2 0 00.081-2.827z"/>
            <path
              d="M32 0C23.453 0 15.417 3.329 9.374 9.373 3.329 15.417 0 23.453 0 32s3.33 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64s16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.33-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0zm19.797 51.798C46.509 57.087 39.479 60 32 60s-14.509-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.203-19.798C17.491 6.913 24.521 4 32 4s14.509 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.203 19.798z"/>
          </svg>
        </div>
        <div className="d-inline ms-2 text-xsmall"><LanguageSelector/></div>
      </div>

      <h1 className="text-big fw-bold d-inline text-nowrap">
        {(headerTitle ?? title)[languageContext.language]}
      </h1>
    </Modal.Header>
    <Modal.Body className="px-0 pt-0" style={{paddingBottom: "25mm"}} children={children}/>
  </Modal>
}