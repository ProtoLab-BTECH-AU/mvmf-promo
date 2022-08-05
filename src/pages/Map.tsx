import {FC, useContext, useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

const text: Record<TLanguage, string[]> = {
  danish: ["Kortet er foreløbigt, ændringer kan forekomme"],
  english: ["The map is preliminary, changes may occur"],
}

const title: Record<TLanguage, string> = {
  danish: "Kort",
  english: "Map",
}

export const Map: FC = () => {
  const languageContext = useContext(LanguageContext)
  useEffect(() => window.scrollTo(0, 0), [])

  document.title = `MVMF 2022 | ${title[languageContext.language]}`

  return <>
    <Header title={title[languageContext.language]} backURl="/" xs={12} lg={7} xl={6}/>
    <Container>
      <Row>
        <Col xs={12}>
          {text[languageContext.language].map((p, i) => <p key={i}>{p}</p>)}
        </Col>

        <Col xs={12}>
          <img src={`${process.env.PUBLIC_URL}/images/walking_tour_map.png`} alt=""/>
        </Col>
      </Row>
    </Container>
  </>
}