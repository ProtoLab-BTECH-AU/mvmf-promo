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
    english: "Maker skills, learning, sharing of knowledge, and showcases from central and western Jutland kommunes",
  },
  date: {
    danish: <>
      22-24 Sep. 2022<br/>
      Aarhus Universitet<br/>
      Birk Centerpark 15<br/>
      Herning
    </>,
    english: <>
      22-24 Sep. 2022<br/>
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
      <li>Lydkunst</li>
      <li>Udviklingslounge</li>
      <li>Designinspirerede taler og gåture i Birk Centerpark</li>
    </ul>,
    english: <ul>
      <li>Demos of maker technologies</li>
      <li>Maker market</li>
      <li>Workshops and presentations</li>
      <li>Kreative coding performances</li>
      <li>Audio art</li>
      <li>Development lounge</li>
      <li>Design-inspired talks and walks around Birk Centerpark</li>
    </ul>,
  },
  organizers: {
    danish: "Arrangører",
    english: "Organizers",
  },
  partners: {
    danish: "Partnere",
    english: "Partners",
  },
}


const Tile: FC<{ title?: string, titleLight?: boolean, link?: string, background?: string }> = (props) => (
  <div className={`interactive h-100 ${props.link ? "link" : ""}`}>
    {props.background &&
      <div className="square-image h-100"
           style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${encodeURIComponent(props.background)})`}}/>}
    {props.title && (
      <div className="interactive-title text-xsmall fw-bold"
           style={{background: props.titleLight ? colors.au7 : colors.au7comp}}>
        <span style={{color: props.titleLight ? colors.au7comp : colors.au7}}>
          {props.title}
        </span>
      </div>
    )}
    {props.link && (
      props.link.search(/^https?:\/\//) ?
        <a href={props.link} className="stretched-link"/> :
        <Link to={props.link} className="stretched-link"/>
    )}
  </div>
)

export const Home: FC = () => {
  const languageContext = useContext(LanguageContext)

  document.title = "MVMF 2022"

  // noinspection HtmlUnknownTarget
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

      <Row className="mt-5">
        <Col xs={12} className="text-center">
          <h3 className="fw-bold">{text.organizers[languageContext.language]}</h3>
          <a className="d-block mx-auto text-decoration-none text-body p-2 grayscale"
             href="https://btech.au.dk" style={{width: "fit-content"}}>
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/logo/btech-color.png`}
                 style={{maxHeight: "75px"}} alt=""/>
          </a>
        </Col>

        <Col xs={12} className="text-center">
          <a className="d-block mx-auto text-decoration-none text-body mt-3 grayscale"
             href="https://protobtech.dk" style={{width: "fit-content"}}>
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/logo/protolab-color.png`}
                 style={{maxWidth: "90px"}} alt=""/>
          </a>
          <span style={{fontSize: "75%"}}>HERNING</span>
        </Col>
      </Row>

      <Row className="mt-5 mb-5">
        <Col xs={12} className="text-center">
          <h3 className="fw-bold">{text.partners[languageContext.language]}</h3>
        </Col>

        <Col xs={12} md={4} lg={3} className="mt-5 mt-md-0 mx-auto text-center">
          <a className="d-block mx-auto text-decoration-none text-body p-2 grayscale"
             href="https://www.baeredygtigherning.dk" style={{width: "fit-content", height: "calc(100% - 2.15rem)"}}>
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/logo/baeredygtig-herning.svg`}
                 style={{maxHeight: "35px"}} alt=""/>
          </a>
          <span style={{fontSize: "75%"}}>HERNING</span>
        </Col>

        <Col xs={12} md={4} lg={3} className="mt-5 mt-md-0 mx-auto text-center">
          <a className="d-block mx-auto text-decoration-none text-body p-2 black"
             href="https://www.herningsholm.dk" style={{width: "fit-content", height: "calc(100% - 2.15rem)"}}>
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/logo/herningsholm.svg`}
                 style={{maxHeight: "35px"}} alt=""/>
          </a>
          <span style={{fontSize: "75%"}}>IKAST-BRANDE</span>
        </Col>

        <Col xs={12} md={4} lg={3} className="mt-5 mt-md-0 mx-auto text-center">
          <a className="d-block mx-auto text-decoration-none text-body p-2 black"
             href="https://teknologicenter.dk" style={{width: "fit-content", height: "calc(100% - 2.15rem)"}}>
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/logo/itc-text.png`}
                 style={{maxHeight: "50px"}} alt=""/>
          </a>
          <span style={{fontSize: "75%"}}>RINGKØBING-SKJERN</span>
        </Col>

        <Col xs={12} md={4} lg={3} className="mt-5 mt-lg-0 mx-auto text-center">
          <a className="d-block mx-auto text-decoration-none text-body p-2 grayscale"
             href="https://elvaerketskive.dk" style={{width: "fit-content", height: "calc(100% - 2.15rem)"}}>
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/logo/elvaerket-color.png`}
                 style={{maxHeight: "35px"}} alt=""/>
          </a>
          <span style={{fontSize: "75%"}}>SKIVE</span>
        </Col>
      </Row>
    </Container>
  )
}