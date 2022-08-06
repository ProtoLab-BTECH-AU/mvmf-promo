import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

const text: Record<TLanguage, string[]> = {
  danish: ["Kortet kommer snart."],
  english: ["The map is coming soon."],
}

export const title: Record<TLanguage, string> = {
  danish: "Kort",
  english: "Map",
}

export const Map: FC = () => {
  const languageContext = useContext(LanguageContext)

  return (
    <Container>
      <Row>
        <Col xs={12}>
          {text[languageContext.language].map((p, i) => <p key={i}>{p}</p>)}
        </Col>
      </Row>
    </Container>
  )
}