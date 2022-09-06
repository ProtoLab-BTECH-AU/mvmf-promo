import {FC} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import {TLanguage} from "../context/LanguageContext"

export const title: Record<TLanguage, string> = {
  danish: "Til virksomheder",
  english: "For Companies",
}

export const ForCompanies: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7} xl={6} className="mx-auto">
          <p>
            MidtVest Maker Fest afholdes over tre dage ved Aarhus Universitet i Herning og I er inviteret! Lokale
            virksomheder, iværksættere og makers samles for at udveksle erfaringer og hylde maker-kulturen og det gode
            håndværk med nye teknologier.
          </p>
          <p>
            Arrangementet forventes at være særligt interessant for jer makers fra industrien, da det giver mulighed for
            at opleve forskellige maker-teknologier der har banet vejen for succes i forbindelse med
            forretningsudvikling, samt at indgå i et nærværk af makers med lignede interesser.
          </p>
          <p className="my-5">
            👉 Tilmeld dig her: <a href="https://rb.gy/mzhv8z">Tilmed dig</a>
          </p>

          <p>
            Fredag den 23. september byder på et program der henvender sig særligt til industrien. Heriblandt
            præsentationer fra Teknologisk Institut, Danish AM Hub og Eduard, der belyser hvordan industrien i praksis
            anvender maker-teknologier, en paneldebat der sætter fokus på hvordan maker-teknologier kan fremme
            forretning i MidtVest, og et oplæg af Professor Cindy Kohtala, der på baggrund af sin forskning fra Umeå
            Universitet, deler indsigter om bæredygtigt design.
          </p>
          <p>
            Gennem dagen vil der være mulighed for at opleve demoer af maker-teknologier såsom 3D-print, laser-cuttere
            og micro-controllere, både i kraft af ’MidtVest Maker udfordringen’, samt ved maker-platformene i
            maker-skoven der repræsentanter blandet andet Skive, Ringkøbing-Skjern og Herning Kommune.
          </p>
          <p>
            Om eftermiddagen afholdes en Fireside Talk modereret af Bæredygtig Herning, der indleder en medrivende
            dialog med Peter Dahl der er leder af FabLab, Spinderihallerne. I forlængelse heraf vil der være mulighed
            for at tage en uformel snak med de andre deltagere og nyde kolde drikkevarer til tonerne af lokale musik.
          </p>
          <p className="my-5">
            Se hele programmet inkl. tider her: <Link to="/program">program</Link>
          </p>

          <p>
            Er I nysgerrige efter mere, giver vi gerne en rundvisning i de ni maker-space laboratorier på AU i Herning.
            Ligeledes er vi åbne for en snak omkring et eventuelt samarbejde på tværs af laboratorier og industri. Er I
            interesseret i lokalkultur og design, har vi tilrettelagt en gåtur der tager jer forbi de mange kendte
            arkitektoniske kunstværker som Birk har at byde på.
          </p>
          <p className="my-5">
            Se kortet eller læs mere om området her: <a
            href="https://www.visitherning.dk/herning/se-og-oplev/attraktioner/birk">visitherning.dk</a>
          </p>
          <p>
            Det er naturligvis helt gratis at deltage i MidtVest Maker Fest og der vil gennem hele dagen være mulighed
            for at købe mad og drikkevarer. Vi glæder os til at se jer!
          </p>
        </Col>
      </Row>
    </Container>
  )
}