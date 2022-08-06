import {FC, useContext, useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {colors} from "../colors"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"
import "./Program.css"


interface IEvent {
  text: Record<TLanguage, string | JSX.Element>
  details?: Record<TLanguage, string | JSX.Element>
  location?: string
  hours?: number
  span?: number
}


const headers: Record<TLanguage, [string, string, string]> = {
  danish: [
    "Maker Skov",
    "BTECH Labs",
    "Oplev Birk",
  ],
  english: [
    "Maker Forest",
    "BTECH Labs",
    "Experience Birk",
  ],
}

const events: Record<string, Record<number, [IEvent | null | undefined] | [IEvent | null | undefined, IEvent | null] | [IEvent | null | undefined, IEvent | null | undefined, IEvent | null]>> = {
  "2022-09-22": {
    10: [
      {
        location: "Main Stage",
        text: {
          danish: "Åbning og Velkomst af MVMF + Introduktion til Kommunerne",
          english: "Opening and welcome to MVMF +  Introduction of the Kommunes",
        },
      },
    ],
    11: [
      {text: {danish: "Mulighed for at Besøge Kommune Platforme", english: "Visit the Kommune Platforms"}},
      {text: {danish: "Labs besøg og workshops for studerende", english: "Labs visits and student maker workshops"}},
    ],
    12: [
      {span: 3, text: {danish: "Frokost", english: "Lunch break"}},
    ],
    13: [
      {hours: 2, text: {danish: "Mulighed for at Besøge Kommune Platforme", english: "Visit the Kommune Platforms"}},
      {
        hours: 2,
        text: {danish: "Labs besøg og workshops for studerende", english: "Labs visits and student maker workshops"},
      },
      {
        hours: 5,
        text: {
          danish: "BIRK DESIGN WALK Have",
          english: "BIRK DESIGN WALK Garden",
        },
      },
    ],
    14: [
      undefined,
    ],
    15: [
      {text: {danish: "KAFFE: Maker Kage", english: "COFFEE: Maker Kage"}},
    ],
    16: [
      {
        location: "BTECH Platform",
        text: {danish: "WORKSHOP: Hacking Maker Station Skærme ", english: "WORKSHOP: Hacking Maker Station Screens"},
      },
    ],
    17: [
      {location: "Main Stage", text: {danish: "MUSIK: Replica", english: "MUSIC: Replica"}},
    ],
    18: [
      {span: 3, text: {danish: "Aftensmad", english: "Dinner break"}},
    ],
    19: [
      {
        location: "Main Stage",
        hours: 2,
        text: {
          danish: "MUSIK: Smashing Pumpkins Jam",
          english: "MUSIC: Smashing Pumpkins Jam",
        },
      },
    ],
    20: [undefined],
  },
  "2022-09-23": {
    9: [
      {
        location: "Main Stage",
        hours: 2,
        text: {
          danish: "PRÆSENTATION:  Forskellige Forretnings \"Makers\" og projekter fra MidtVest                                                                                   ",
          english: "PRESENTATIONS: 'Making' Business in Midtvest",
        },
      },
      {text: {danish: "WORKSHOP: IoT hardware og software", english: "WORKSHOP: IoT hardware and software"}},
      {
        hours: 3,
        text: {
          danish: "BIRK DESIGN WALK Museum",
          english: "BIRK DESIGN WALK Museum",
        },
      },
    ],
    10: [
      {
        text: {
          danish: "WORKSHOP: Making Digital Trust for SMEs: DIGI Lab",
          english: "WORKSHOP: Making Digital Trust for SMEs: DIGI Lab",
        },
      },
    ],
    11: [
      {
        location: "Main Stage",
        text: {
          danish: "PANELDEBAT: med udvalgte Makers fra MidtVest ",
          english: "PANEL DISCUSSION: 'Making' Business in Midtvest",
        },
      },
      {text: {danish: "WORKSHOP: Making with laser cutting", english: "WORKSHOP: Making with laser cutting"}},
    ],
    12: [
      {span: 3, text: {danish: "Frokost", english: "Lunch break"}},
    ],
    13: [
      {
        location: "Main Stage",
        text: {
          danish: "MAKER HULE P1: Repræsentanter fra hver Kommune",
          english: "MidtVest Makers Hule P1: Representatives from Kommunes",
        },
      },
      undefined,
      {
        hours: 5,
        text: {
          danish: "BIRK DESIGN WALK Museum",
          english: "BIRK DESIGN WALK Museum",
        },
      },
    ],
    14: [
      {
        location: "Main Stage",
        text: {
          danish: "MAKER HULE P2: Åben tilmelding for alle",
          english: "MidtVest Makers Hule P2: Open Call and Competition",
        },
      },
    ],
    15: [
      {
        location: "Main Stage",
        text: {danish: "KEYNOTE: Digital Craftsmanship", english: "KEYNOTE: Digital Craftsmanship"},
      },
    ],
    16: [
      {text: {danish: "KAFFE: Makers Lounge", english: "COFFEE: Makers Lounge"}},
    ],
    17: [
      {
        location: "Main Stage",
        text: {danish: "MUSIK: DJ Rishanthan Rajarajan", english: "MUSIC: DJ Rishanthan Rajarajan"},
      },
    ],
    18: [
      {span: 3, text: {danish: "Aftensmad", english: "Dinner break"}},
    ],
    19: [
      {
        location: "Main Stage",
        hours: 2,
        text: {danish: "MUSIK: DJ Rishanthan Rajarajan", english: "MUSIC: DJ Rishanthan Rajarajan"},
      },
    ],
    20: [null],
  },
  "2022-09-24": {
    9: [
      {
        location: "Main Stage",
        hours: 3,
        text: {
          danish: <>
            PRÆSENTATION: Teknologi "Makers" and Cases<br/><br/>
            Mulighed for at Besøge Kommune Platforme
          </>,
          english: <>
            PRESENTATION: Industry 'Makers' Show Cases<br/><br/>
            Visit the Kommune Platforms
          </>,
        },
      },
      undefined,
      {
        hours: 3,
        text: {
          danish: "BIRK DESIGN WALK Museum og Have ",
          english: "BIRK DESIGN WALK Museum and Garden",
        },
      },
    ],
    10: [null],
    11: [null],
  },
}


export const Program: FC = () => {
  const languageContext = useContext(LanguageContext)
  useEffect(() => window.scrollTo(0, 0), [])

  document.title = "MVMF 2022 | Program"

  return <>
    <Header title="Program" backURl="/#program" style={{background: "#E7E7E7"}} xs={12} lg={7} xl={6} sticky/>
    <Container id="program" className="mb-5" fluid>
      <Row className="mb-5 pb-5">
        <Col xs={12} lg={7} xl={6} className="mx-auto p-0">
          <p className="px-2 px-lg-0 pt-2 text-xsmall">
            {languageContext.language === "danish" && "Programmet er foreløbigt, ændringer kan forekomme"}
            {languageContext.language === "english" && "The program is preliminary, changes may occur"}
          </p>

          <table className="sticky-top" style={{zIndex: 1021, top: "4.75rem"}}>
            <thead>
            <tr style={{background: colors.au7comp, color: colors.au7}}>
              <th></th>
              <th className="px-0 text-center">
                {headers[languageContext.language][0]}
              </th>
              <th className="px-0 text-center">
                {headers[languageContext.language][1]}
              </th>
              <th className="px-0 text-center">
                {headers[languageContext.language][2]}
              </th>
            </tr>
            </thead>
          </table>

          {Object.entries(events).map(([day, hours]) => {
            const date = new Date(day)

            return <>
              <div className="my-3 sticky-top text-xsmall ps-1 d-inline-block pointer"
                   style={{
                     height: "4.50rem", width: "calc(10% + 1px)",
                     zIndex: 1120, top: "4.75rem",
                     background: colors.au7comp,
                     color: colors.au7,
                   }}
                   onClick={() => {
                     const top = document.getElementById(day)?.getBoundingClientRect().top ?? 0
                     if (top > 0) return
                     window.scrollBy({top: top - 380})
                   }}>
                {date.toLocaleString(languageContext.locale, {day: "numeric"})}<br/>
                {date.toLocaleString(languageContext.locale, {month: "short"})}
              </div>

              <table id={day} className="border-separate">
                <tbody>
                {Object.entries(hours).map(([hour, [ev1, ev2, ev3]], i) => {
                  let col1: JSX.Element | null = null
                  let col2: JSX.Element | null = null
                  let col3: JSX.Element | null = null

                  if (ev1) col1 = <td colSpan={ev1.span ?? 1} rowSpan={ev1.hours ?? 1}>
                    {ev1.location && <div style={{fontSize: "75%"}}><em>{ev1.location}</em></div>}
                    {ev1.text[languageContext.language]}
                  </td>
                  else if (ev1 === null) col1 = null
                  else if (ev2 || ev3) col1 = <td className="empty"/>
                  else if (i === 0) col1 = <td className="empty"/>

                  if (ev2) col2 = <td colSpan={ev2.span ?? 1} rowSpan={ev2.hours ?? 1}>
                    {ev2.location && <div style={{fontSize: "75%"}}><em>{ev2.location}</em></div>}
                    {ev2.text[languageContext.language]}
                  </td>
                  else if (ev2 === null) col2 = null
                  else if (ev3) col2 = <td className="empty"/>
                  else if (i === 0) col2 = <td className="empty"/>

                  if (ev3) col3 = <td colSpan={ev3.span ?? 1} rowSpan={ev3.hours ?? 1}>
                    {ev3.location && <div style={{fontSize: "75%"}}><em>{ev3.location}</em></div>}
                    {ev3.text[languageContext.language]}
                  </td>
                  else if (ev3 === null) col3 = null
                  else if (i === 0) col3 = <td className="empty"/>

                  return <tr key={i} id={!i ? day : ""}>
                    <td className="time">
                      <div>{hour.padStart(2, "0")}.00-{String(Number(hour) + 1).padStart(2, "0")}.00</div>
                    </td>
                    {col1}
                    {col2}
                    {col3}
                  </tr>
                })}
                </tbody>
              </table>
            </>
          })}
        </Col>
      </Row>
    </Container>
  </>
}