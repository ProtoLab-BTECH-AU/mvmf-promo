import {FC, useContext} from "react"
import {Col, Container, Figure, Row} from "react-bootstrap"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

const text: Record<TLanguage, (JSX.Element | string)[]> = {
  danish: [
    <>
      <h2 className="fw-bold">Hvad er en maker?</h2>

      Adam Savage beskriver det på en udførlig møde:<br/>
      <Figure className="mb-0">
        <blockquote className="blockquote fst-italic">
          Humans do two things that make us unique from all other animals; we use tools and we tell stories. And when
          you make something, you’re doing both at once.
        </blockquote>
        <Figure.Caption className="blockquote-footer mb-0">
          <a href="https://makezine.com/2016/04/01/what-is-a-maker-you-are/">
            <em>What Is a Maker? You Are</em> af Caleb Kraft
          </a>
        </Figure.Caption>
      </Figure>
    </>,
    <>
      For en akademisk beskrivelse af den "maker movement", se Dale Doughertys tekst:&nbsp;
      <a href="https://muse.jhu.edu/article/499244">The Maker Movement</a>.
    </>,
    <>
      For en mere generisk forståelse henvises til&nbsp;
      <a href="https://en.wikipedia.org/wiki/Maker_culture">artiklen om makerkultur i Wikipedia (på engelsk)</a>.
    </>,
    "Midtvest Maker Fest (MVMF) er en begivenhed, der støtter og hylder maker-kulturen som et fællesskab ved at forbinde det med lokalsamfund, industri og andre interesserede organisationer.",
    "Godt håndværk inden for design, materialeprocesser eller teknologiledelse er fundamentet for at fremstille gode produkter, services og oplevelser. Maker-spaces og maker-fællesskaber hjælper ikke blot med at udbrede godt håndværk, men de skaber og forfiner også færdigheder i anvendelsen af nye digitale værktøjer som eksempelvis 3D-printere, laserskærere og mikrocontrollere. Som et netværk af maker-spaces i Midt- og Vestjylland er det vores mål at facilitere maker-færdigheder, viden og informationsdeling mellem borgere, virksomheder, uddannelsesinstitutioner og civile organisationer.",
    "Som et tre-dages arrangement, der afholdes i Birk Centerpark i Herning, vil MVMF samle makere, lokale virksomheder, iværksættere og andre skabere for at dele erfaringer og fejre maker-kulturen og det gode håndværk med nye teknologier.",
  ],
  english: [
    <>
      <h2 className="fw-bold">What is a maker?</h2>

      Adam Savage has worded this in an eloquent way:<br/>
      <Figure className="mb-0">
        <blockquote className="blockquote fst-italic">
          Humans do two things that make us unique from all other animals; we use tools and we tell stories. And when
          you make something, you’re doing both at once.
        </blockquote>
        <Figure.Caption className="blockquote-footer mb-0">
          <a href="https://makezine.com/2016/04/01/what-is-a-maker-you-are/">
            <em>What Is a Maker? You Are</em> by Caleb Kraft
          </a>
        </Figure.Caption>
      </Figure>
    </>,
    <>
      For an articulation of "maker movement" please refer to Dale Dougherty’s text:&nbsp;
      <a href="https://muse.jhu.edu/article/499244">The Maker Movement</a>.
    </>,
    <>
      For a more generic understanding of maker culture please refer to the&nbsp;
      <a href="https://en.wikipedia.org/wiki/Maker_culture">Maker culture article on Wikipedia</a>.
    </>,
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