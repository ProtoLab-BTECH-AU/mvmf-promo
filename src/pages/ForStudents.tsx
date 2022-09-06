import {FC} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import {TLanguage} from "../context/LanguageContext"

export const title: Record<TLanguage, string> = {
  danish: "Til studerende",
  english: "For Students",
}

export const ForStudents: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7} xl={6} className="mx-auto">
          <p>
            MidtVest Maker Fest afholdes over tre dage ved Aarhus Universitet i Herning og du er inviteret! Makers,
            lokale virksomheder og iværksættere samles for at udveksle erfaringer og hylde maker-kulturen og det gode
            håndværk med nye teknologier.
          </p>
          <p>
            Arrangementet forventes at være særligt interessant for jer unge makers, da det giver mulighed for at opleve
            forskellige maker-teknologier der har banet vejen fra hobbyprojekt til forretningssucces, samt at indgå i et
            nærværk af makers med lignede interesser.
          </p>

          <p className="my-5">
            👉 Tilmeld dig her: <a href="https://rb.gy/mzhv8z">Tilmed dig</a>
          </p>

          <p>
            Torsdag den 22. september byder på et program der henvender sig særligt unge makers, men du er naturligvis
            velkommen på alle arrangementets dage. Institutleder Anders Frederiksen byder velkommen kl. 10 og der vil
            efterfølgende være mulighed for rundvisning i de ni maker-space laboratorier på AU i Herning. Efter
            rundturen kan du deltage i en workshop som afholdes af udvalgte laboratorie, heriblandt PROTO* lab, DIGI-lab
            og Concept Development lab og Drone Lab. Workshoppen foregår udendørs og giver dig anledning til at afprøve
            og lære om de specifikke maker-teknologier som anvendes i laboratorierne.
          </p>

          <p className="my-5">
            Se hele programmet inkl. tider her: <Link to="/program">program</Link>
          </p>

          <p>
            I maker-skoven afholdes et oplæg af Professor Cindy Kohtala, der på baggrund af sin forskning fra Umeå
            Universitet, deler indsigter om bæredygtigt design, og diverse demoer af maker-teknologier fremvises såsom
            3D-print, laser-cuttere og micro-controllere. Er du selv en erfaren maker eller digital håndværker og har du
            et produkt du gerne vil vise frem? Så vil vi opfordre dig til at deltage i ’MidtVest Maker udfordringen’,
            der afholdes i forbindelse med arrangementet.
          </p>

          <p className="my-5">
            Læs mere om udfordringen her: <Link to="/challenge">udfordring</Link>
          </p>

          <p>
            Det er naturligvis helt gratis at deltage i MidtVest Maker Fest og arrangementet er åbent for alle. Der vil
            gennem hele dagen være mulighed for at købe mad og drikkevarer, og fra kl. 17.00 vil der være livemusik på
            hovedscenen. Er du interesseret i lokalkultur og design, har vi tilrettelagt en gåtur der tager dig forbi de
            mange kendte arkitektoniske kunstværker som Birk har at byde på.
          </p>

          <p className="my-5">
            Se kortet eller læs mere om området her: <a
            href="https://www.visitherning.dk/herning/se-og-oplev/attraktioner/birk">visitherning.dk</a>
          </p>

          <p>
            Vi glæder os til at se dig og alle dine maker-venner!
          </p>
        </Col>
      </Row>
    </Container>
  )
}