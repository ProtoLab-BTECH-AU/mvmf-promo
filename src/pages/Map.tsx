import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {LanguageContext, TLanguage} from "../context/LanguageContext"
import "./Map.css"
import {MapSVG} from "./MapSVG"

const text: Record<TLanguage, (JSX.Element | string)[]> = {
  danish: [],
  english: [],
}

export const title: Record<TLanguage, string> = {
  danish: "Kort",
  english: "Map",
}

export const Map: FC = () => {
  const languageContext = useContext(LanguageContext)

  return (
    <Container id="map">
      <Row>
        <Col xs={12}>
          {text[languageContext.language].map((p, i) => typeof p === "string" ? <p key={i}>{p}</p> : p)}
        </Col>

        <Col xs={12}>
          <MapSVG language={languageContext.language}/>
        </Col>
      </Row>
    </Container>
  )
}