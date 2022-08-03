import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

const text: Record<TLanguage, string[]> = {
  danish: [
    "Midtvest Maker Fest (MVMF) er en begivenhed, der støtter og hylder maker-kulturen som et fællesskab ved at forbinde det med lokalsamfund, industri og andre interesserede organisationer.",
    "Godt håndværk inden for design, materialeprocesser eller teknologiledelse er fundamentet for at fremstille gode produkter, services og oplevelser. Maker-spaces og maker-fællesskaber hjælper ikke blot med at udbrede godt håndværk, men de skaber og forfiner også færdigheder i anvendelsen af nye digitale værktøjer som eksempelvis 3D-printere, laserskærere og mikrocontrollere. Som et netværk af maker-spaces i Midt- og Vestjylland er det vores mål at facilitere maker-færdigheder, viden og informationsdeling mellem borgere, virksomheder, uddannelsesinstitutioner og civile organisationer.",
    "Som et tre-dages arrangement, der afholdes i Birk Centerpark i Herning, vil MVMF samle makere, lokale virksomheder, iværksættere og andre skabere for at dele erfaringer og fejre maker-kulturen og det gode håndværk med nye teknologier.",
  ],
  english: [
    "The Midtvest Maker Fest (MVMF) is an event that supports and celebrates maker culture with their communities by connecting them with local industry and institutions.",
    "Good craftsmanship, in design, material processes or technology management is the backbone for manufacturing good products, services and experiences. Makerspaces and maker communities not only help inculcate good craftsmanship but they also facilitate the honing of skills with new digital tools like 3D printers, laser cutters and microcontrollers. Our aim as a network of makerspaces in midtvest Jutland is to facilitate maker skill, knowledge and information sharing between educational institutions, businesses, and civic organizations.",
    "As a three day event at Birk Centerpark in Herning MVMF will bring together makers, students local companies, entrepreneurs, tool makers to share and celebrate making and good craftmanship with new technologies.",
  ],
}

const title: Record<TLanguage, string> = {
  danish: "Om",
  english: "About",
}

export const About: FC = () => {
  const languageContext = useContext(LanguageContext)

  document.title = `MVMF 2022 | ${title[languageContext.language]}`

  return <>
    <Header title={title[languageContext.language]} backURl="/" xs={12} lg={7} xl={6}/>
    <Container>
      <Row>
        <Col xs={12} lg={7} xl={6} className="mx-auto">
          {text[languageContext.language].map((p, i) => <p key={i}>{p}</p>)}
        </Col>
      </Row>
    </Container>
  </>
}