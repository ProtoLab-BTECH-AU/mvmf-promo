import {FC, useContext, useState} from "react"
import {Button, Col, Container, Row} from "react-bootstrap"
import {useSearchParams} from "react-router-dom"
import {LanguageSelector} from "../components/LanguageSelector"
import {LanguageContext, TLanguage} from "../context/LanguageContext"


const text: Record<string, Record<TLanguage, JSX.Element | string>> = {
  title: {
    danish: <>
      ER DU EN<br/>
      MIDTVEST<br/>
      MAK<span className="orange">ER</span>?
    </>,
    english: <>
      ARE YOU A<br/>
      MIDTVEST<br/>
      MAK<span className="orange">ER</span>?
    </>,
  },
  subtitle: {
    danish: "UDVIKL",
    english: "DEVELOP",
  },
  description: {
    danish: "Maker-kompetencer, læring, vidensdeling og showcases fra midt- og vestjyske kommuner",
    english: "Maker skills, learning, knowledge, and showcases from the central and western Jutland municipalities",
  },
  date: {
    danish: <>
      22-24 sep. 2022<br/>
      Aarhus Universitet<br/>
      Birk Centerpark 15<br/>
      Herning
    </>,
    english: <>
      22-24 Sept. 2022<br/>
      Aarhus Universitet<br/>
      Birk Centerpark 15<br/>
      Herning
    </>,
  },
  events: {
    danish: <ul>
      <li>Demoer af maker-teknologier</li>
      <li>Maker-marked</li>
      <li>Workshops og præsentationer</li>
      <li>Kreative kodningsforestillinger</li>
      <li>Fireside talk</li>
      <li>Designinspirerede taler og gåture i Birk Centerpark</li>
    </ul>,
    english: <ul>
      <li>Demos of maker technologies</li>
      <li>Maker market</li>
      <li>Workshops and presentations</li>
      <li>Creative coding performances</li>
      <li>Fireside talk</li>
      <li>Design-inspired talks and walks around Birk Centerpark</li>
    </ul>,
  },
  research: {
    danish: "Dette arrangement er et research event, der har fokus at få et fælles netværk på tværs af kommunerne i region Midt- og Vestjylland styrker håndværk digitalt.",
    english: "The event is a research event that focuses on making a  network across the municipalities in the region of Central and West Jutland to strengthen craftsmanship digitally.",
  },
  organizers: {
    danish: "Arrangører",
    english: "Organizers",
  },
  partners: {
    danish: "Partnere",
    english: "Partners",
  },
  sponsors: {
    danish: "Sponsorer",
    english: "Sponsors",
  },
  contact: {
    danish: "Kontakt",
    english: "Contact",
  },
}

export const HomeSimple: FC = () => {
  const languageContext = useContext(LanguageContext)
  const params = useSearchParams()[0]
  const customText = params.get("text")
  const language = params.get("language") as TLanguage | null ?? languageContext.language

  const [customTextNew, setCustomTextNew] = useState<string>(customText ?? "")

  document.title = "MVMF 2022"

  // noinspection HtmlUnknownTarget
  return (
    <Container id="main" style={{animation: "fade-in .3s linear"}} fluid>
      <Row className="px-0 position-relative overflow-hidden" style={{height: "100vh", minHeight: "325px"}}>
        <div className="position-absolute top-0 start-0 h-100 w-100">
          {!customText && (
            <div className="position-absolute" style={{top: ".75rem", left: ".75rem"}}>
              <h1 className="text-small mb-0 mt-1"><LanguageSelector/></h1>
            </div>
          )}

          <div className="position-absolute" style={{top: ".75rem", right: ".75rem"}}>
            <h1 className="text-end text-big mb-0">{text.title[language]}</h1>
            <h1 className="orange text-big text-end"
                style={{
                  transformOrigin: "right top",
                  transform: "rotate(-90deg) translateY(-2em) translateX(.125em)",
                }}>
              {text.subtitle[language]}
            </h1>
          </div>

          <div className="position-absolute top-50 start-0 w-100 text-big"
               style={{transform: "translateY(-50%)"}}>
            {customText ? (
              <Row>
                <Col xs={12} className="text-center" style={{whiteSpace: "pre", lineHeight: 1.125}}>
                  {customText}
                </Col>
                <Col xs={12} className="px-0 text-center mt-5">
                  <img className="img-fluid" style={{height: "4em"}} src={`${process.env.PUBLIC_URL}/qr-code.svg`}
                       alt=""/>
                </Col>
              </Row>
            ) : (
              <div className="mx-5 text-center">
                <textarea className="form-control" value={customTextNew} rows={3}
                          onInput={(ev) => setCustomTextNew(ev.currentTarget.value)}
                          placeholder="Enter custom text here."/>
                <Button disabled={!customTextNew} onClick={() => {
                  const url = new URL(window.location.href)
                  url.searchParams.set("text", customTextNew)
                  url.searchParams.set("language", languageContext.language)
                  window.location.href = url.href
                }}>Use</Button>
              </div>
            )}
          </div>

          <h1 className="position-absolute fw-bold text-large"
              style={{
                left: ".75rem",
                bottom: "-.25em",
                transform: "rotate(-90deg) translateX(1em) translateY(-1em)",
              }}>
            MVM<span className="orange">F</span>
          </h1>

          <div className="position-absolute text-end" style={{bottom: 0, right: ".75rem"}}>
            <h1 className="text-small">
              22-24 Sep 2022<br/>
              Birk Centerpark 15, Herning, Danmark
            </h1>

            <h1 className="text-end fw-bold" style={{fontSize: "4rem"}}>
              MIDTVEST MAKER <span className="orange">FEST</span>
            </h1>
          </div>
        </div>
      </Row>
    </Container>
  )
}