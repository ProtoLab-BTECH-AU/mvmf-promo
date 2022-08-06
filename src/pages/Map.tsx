import {FC, useContext, useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

const text: Record<TLanguage, string[]> = {
  danish: ["Kortet kommer snart."],
  english: ["The map is coming soon."],
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
    <Header title={title[languageContext.language]} backURl="/#map" xs={12} lg={7} xl={6}/>
    <Container>
      <Row>
        <Col xs={12}>
          {text[languageContext.language].map((p, i) => <p key={i}>{p}</p>)}
        </Col>
      </Row>
    </Container>
  </>
}