import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import {colors} from "../colors"
import {LanguageSelector} from "../components/LanguageSelector"
import {LanguageContext, TLanguage} from "../context/LanguageContext"


const tiles: Record<string, Record<TLanguage, string>> = {
  about: {danish: "Om", english: "About"},
  register: {danish: "Tilmeld Dig", english: "Register"},
  program: {danish: "Program", english: "Program"},
}

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
    english: "",
  },
  date: {
    danish: <>
      22-24 Sep. 2022<br/>
      Aarhus Universitet<br/>
      Birk Centerpark 15<br/>
      Herning
    </>,
    english: "",
  },
  events: {
    danish: <ul>
      <li>Demoer af maker-teknologier</li>
      <li>Maker-marked</li>
      <li>Workshops og præsentationer</li>
      <li>Kreative kodningsforestillinger</li>
      <li>Lydkunst</li>
      <li>Udviklingslounge</li>
      <li>Designinspirerede taler og gåture i Birk Centerpark</li>
    </ul>,
    english: "",
  },
}


const Tile: FC<{ title?: string, titleLight?: boolean, link?: string, background?: string }> = (props) => (
  <div className="interactive h-100">
    {props.background &&
      <div className="square-image h-100" style={{backgroundImage: `url(${encodeURIComponent(props.background)})`}}/>}
    {props.title && (
      <div className="interactive-title text-xsmall fw-bold"
           style={{background: props.titleLight ? colors.au7 : colors.au7comp}}>
        <span style={{color: props.titleLight ? colors.au7comp : colors.au7}}>
          {props.title}
        </span>
      </div>
    )}
    {(!!props.link && props.link.startsWith("http")) && <a href={props.link} className="stretched-link"/>}
    {(!!props.link && !props.link.startsWith("http")) && <Link to={props.link} className="stretched-link"/>}
  </div>
)

export const Home: FC = () => {
  const languageContext = useContext(LanguageContext)

  document.title = "MVMF 2022"

  return (
    <Container fluid>
      <Row className="px-0 position-relative overflow-hidden" style={{height: "80vh", minHeight: "325px"}}>
        <div className="position-absolute top-0 start-0 h-100 w-100">
          <div className="position-absolute" style={{top: ".75rem", left: ".75rem"}}>
            <h1 className="text-small mb-0 mt-1"><LanguageSelector/></h1>
          </div>

          <div className="position-absolute" style={{top: ".75rem", right: ".75rem"}}>
            <h1 className="text-end text-big mb-0">{text.title[languageContext.language]}</h1>
            <h1 className="orange text-big text-end"
                style={{transformOrigin: "right top", transform: "rotate(-90deg) translateY(-2em) translateX(.125em)"}}>
              {text.subtitle[languageContext.language]}
            </h1>
          </div>

          <h1 className="position-absolute fw-bold text-large"
              style={{left: ".75rem", bottom: "-.25em", transform: "rotate(-90deg) translateX(1em) translateY(-1em)"}}>
            MVM<span className="orange">F</span>
          </h1>

          <h1 className="position-absolute text-end text-small" style={{bottom: 0, right: ".75rem"}}>
            22-24 Sep 2022<br/>
            Birk Centerpark 15, Herning, Danmark
          </h1>
        </div>
      </Row>

      <Row className="mt-1">
        <Col xs={12} md={6} xl={5} style={{height: "fit-content"}}>
          <Row className="px-0_5">
            <Col xs={8}>
              <Row>
                <Col xs={6} className="px-0_5">
                  <Tile background={"images/Chariot.jpg"} title={tiles.about[languageContext.language]}
                        titleLight={true} link="about"/>
                </Col>

                <Col xs={6} className="px-0_5">
                  <Tile background={"images/Ivy.jpg"} title={tiles.register[languageContext.language]}
                        link="https://forms.office.com/r/i5m431jhpK"/>
                </Col>

                <Col xs={6} className="px-0_5 mt-1">
                  <Tile background={"images/Laser control.jpg"}/>
                </Col>

                <Col xs={6} className="px-0_5 mt-1">
                  <Tile background={"images/Elia.jpg"}/>
                </Col>
              </Row>
            </Col>

            <Col xs={4}>
              <Row className="px-0_5 h-100">
                <Col xs={12} className="p-0 h-100">
                  <Tile background="images/trunkclaspers.jpg" title={tiles.program[languageContext.language]}
                        titleLight={true} link="program"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6} xl={7}>
          <h1 className="text-end fw-bold" style={{fontSize: "4rem"}}>
            MIDTVEST MAKER <span className="orange">FEST</span>
          </h1>
        </Col>
      </Row>

      <Row className="mt-md-1">
        <Col xs={12} md={6} xl={5} style={{height: "fit-content"}}>
          <Row className="px-0_5">
            <Col xs={4} className="px-0_5">
              <Tile background="images/3D printer.jpg"/>
            </Col>

            <Col xs={4} className="px-0_5">
              <Tile background="images/SDG.jpg"/>
            </Col>

            <Col xs={4} className="px-0_5">
              <Tile background="images/Drillbits.jpg"/>
            </Col>

            <Col xs={4} className="px-0_5 mt-1">
              <Tile background="images/PacMan.png"/>
            </Col>

            <Col xs={4} className="px-0_5 mt-1">
              <Tile background="images/Basketball and flower.jpg"/>
            </Col>

            <Col xs={4} className="px-0_5 mt-1">
              <Tile background="images/Infra.jpg"/>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6} xl={7} className="mt-2 mt-md-0 px-0" style={{fontSize: "75%"}}>
          <div className="ps-2 fw-bold">
            {text.description[languageContext.language]}
          </div>
          <div className="orange fw-bold mt-3 ps-2 ps-md-4">
            {text.date[languageContext.language]}
          </div>
          <div className="fw-bold mt-3">
            {text.events[languageContext.language]}
          </div>
        </Col>
      </Row>
    </Container>
  )
}