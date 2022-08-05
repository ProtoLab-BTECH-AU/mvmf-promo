import {FC, useContext, useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

const text: Record<TLanguage, string> = {
  danish: "Siden kan ikke findes",
  english: "The page could not be found",
}

export const NotFound: FC = () => {
  const languageContext = useContext(LanguageContext)
  useEffect(() => window.scrollTo(0, 0), [])

  document.title = "MVMF 2022 | 404"

  return <>
    <Header title="" backURl="/" xs={12} lg={8}/>
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={12} lg={8} className="mx-auto text-center">
          <h1 className="text-big danger">404</h1>
          <h1 className="text-small">{text[languageContext.language]}</h1>
        </Col>
      </Row>
    </Container>
  </>
}
