import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {LanguageContext, TLanguage} from "../context/LanguageContext"


export const title: Record<TLanguage, string> = {danish: "Workshops", english: "Workshops"}


const text: Record<string, Record<TLanguage, string | JSX.Element>> = {
  title: {
    danish: "Forberedelse til workshops for eleverne og studerende til MVMF 2022",
    english: "Preparation for the Student Workshops at MVMF 2022",
  },
  introduction: {
    danish: <>
      <p>
        I forbindelse med MidtVest Maker Fest vil der blive afholdt workshops for elever og studerende i de følgende
        laboratorier: Concept Development Lab, DIGI Lab, Drone Lab og PROTO* Lab.
      </p>
      <p>
        Det er ikke forventet at der er større forudgående kendskab til maker-teknologier mm. og der er fokus på at der
        bliver lavet en introduktion i begyndelsen af hver workshop. Hertil er der de nedenstående punkter fra hvert
        laboratorie, som angiver, hvordan man bedst kan forbedrede sig til at kunne deltage i hver af deres
        workshops.
      </p>
      <p className="mt-2"><em>
        Bemærk at til flere workshops er behov for at man medbringer sin egen bærbar/computer om muligt, da der
        forudsætter den bedste mulighed for at deltage i den digitale del af workshoppen.
      </em></p>
    </>,
    english: <>
      <p>
        In connection with MidtVest Maker Fest, workshops will be held for pupils and students in the following
        laboratories: Concept Development Lab, DIGI Lab, Drone Lab and PROTO* Lab.
      </p>
      <p>
        No prior knowledge of maker technologies etc. is expected, and there will be an introduction at the beginning of
        each workshop. In addition to that, ther are some preparatory information below which indicate how best to
        prepare to participate in each workshop.
      </p>
      <p className="mt-2"><em>
        Please note that for several workshops you need to bring your own laptop if possible, as this gives
        the best opportunity to participate in the digital part of the workshop.
      </em></p>
    </>,
  },
  concept_development: {
    danish: <ul>
      <li>Medbring egen bærbar og computermus</li>
      <li>
        At have oprettet en bruger til TinkerCAD, eller andet 3D programmet til rådighed: <a
        href="https://www.tinkercad.com/join" target="_blank" rel="noreferrer">www.tinkercad.com/join</a>
      </li>
      <li>
        At have forberedt en fil hjemme fra eleverne gerne vil arbejde med:
        <ul>
          <li>Til 3D print skal de have en STL-fil med</li>
          <li>Til laserskæren skal de have en DXF-fil med</li>
        </ul>
      </li>
    </ul>,
    english: <ul>
      <li>Bring your own laptop and mouse</li>
      <li>
        Open a TinkerCad account or other available 3D program: <a
        href="https://www.tinkercad.com/join" target="_blank" rel="noreferrer">www.tinkercad.com/join</a>
      </li>
      <li>
        Have a file prepared at home that the students would like to work with:
        <ul>
          <li>For 3D printing they will need an STL file</li>
          <li>For laser cutting they will need a DXF file</li>
        </ul>
      </li>
    </ul>,
  },
  digi: {
    danish: <ul>
      <li>Medbring egen bærbar (Windows eller Mac men ikke Linux)</li>
      <li>
        Opsætning af program som fungere med Dobot:
        <ol>
          <li>
            Programmet kan findes her: <a
            href={`${process.env.PUBLIC_URL}/workshops/DobotStudio(Windows)V1.9.4.zip`} target="_blank"
            rel="noreferrer">DobotStudio (Windows) v1.9.4.zip</a>
          </li>
          <li>Installer programmet på din computer, med alle drivers inkluderet</li>
          <li>Klik på Dobot studio for "Start"</li>
        </ol>
      </li>
      <li>
        Gennemgå venligst denne vejledning før workshoppen for at gøre dig bekendt med sikkerhed og korrekt betjening
        af robotter: <a href={`${process.env.PUBLIC_URL}/workshops/WorkshopRoboticsFundamentals.pdf`} target="_blank"
                        rel="noreferrer">Workshop Robotics Fundamentals (på Engelsk)</a>
      </li>
    </ul>,
    english: <ul>
      <li>Bring your own laptop (Windows or macOS but not Linux)</li>
      <li>
        Setup of the program to control the Dobot:
        <ol>
          <li>
            The program can be found here: <a
            href={`${process.env.PUBLIC_URL}/workshops/DobotStudio(Windows)V1.9.4.zip`} target="_blank"
            rel="noreferrer">DobotStudio (Windows) v1.9.4.zip</a>
          </li>
          <li>Install the program on your computer with all the included drivers</li>
          <li>Open Dobot Studio to start</li>
        </ol>
      </li>
      <li>
        Please review this manual prior to the workshop to familiarize yourself with safety and proper operation of the
        robots: <a href={`${process.env.PUBLIC_URL}/workshops/WorkshopRoboticsFundamentals.pdf`} target="_blank"
                   rel="noreferrer">Workshop Robotics Fundamentals</a>
      </li>
    </ul>,
  },
  drone: {
    danish: "For at deltage i workshoppen er der ingen umiddelbar forberedelse",
    english: "There are no specific requirements to participate in the workshop",
  },
  proto: {
    danish: <ul>
      <li>Medbring egen bærbar (Windows eller Mac men ikke Linux)</li>
      <li>
        Opret gratis bruger på <a href="https://roblox.com" target="_blank" rel="noreferrer">roblox.com</a>, hvis du
        ikke allerede har en bruger
      </li>
      <li className="mt-2" style={{fontSize: "85%", listStyle: "none"}}>
        Al koden, der bruges i denne workshop, er tilgængelig på PROTO* Lab's GitHub side: <a
        href="https://github.com/ProtoLab-BTECH-AU/mvmf2022-workshop" target="_blank"
        rel="noreferrer">mvmf2022-workshop</a>
      </li>
    </ul>,
    english: <ul>
      <li>Bring your own laptop (Windows or macOS but not Linux)</li>
      <li>
        Create a free account at <a href="https://roblox.com" target="_blank" rel="noreferrer">roblox.com</a> if you
        do
        not already have one
      </li>
      <li className="mt-2" style={{fontSize: "85%", listStyle: "none"}}>
        All the code used for this workshop is available on the PROTO* Lab's GitHub page: <a
        href="https://github.com/ProtoLab-BTECH-AU/mvmf2022-workshop" target="_blank"
        rel="noreferrer">mvmf2022-workshop</a>
      </li>
    </ul>,
  },
}


export const Workshops: FC = () => {
  const languageContext = useContext(LanguageContext)

  return <Container>
    <Row>
      <Col xs={12} lg={7} xl={6} className="mx-auto">
        <h2 className="mb-3 mb-lg-4"><strong>{text.title[languageContext.language]}</strong></h2>

        {text.introduction[languageContext.language]}

        <h4 className="mt-5"><strong>Concept Development Lab</strong></h4>
        {text.concept_development[languageContext.language]}

        <h4 className="mt-5"><strong>DIGI Lab</strong></h4>
        {text.digi[languageContext.language]}

        <h4 className="mt-5"><strong>Drone Lab</strong></h4>
        {text.drone[languageContext.language]}

        <h4 className="mt-5"><strong>PROTO* Lab</strong></h4>
        {text.proto[languageContext.language]}
      </Col>
    </Row>
  </Container>
}