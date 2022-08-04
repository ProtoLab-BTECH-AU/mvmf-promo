import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {colors} from "../colors"
import {Header} from "../components/Header"
import {LanguageContext, TLanguage} from "../context/LanguageContext"
import "./Program.css"


interface IEvent {
  text: Record<TLanguage, string | JSX.Element>
  details?: Record<TLanguage, string | JSX.Element>
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
      {text: {danish: "Åbning og Velkomst af MVMF + Introduktion til Kommunerne", english: "Opening and welcome to MVMF +  Introduction of the Kommunes"}},
    ],
    11: [
      {text: {danish: "SKOV: Mulighed for at Besøge Kommune Platforme", english: "FOREST: Visit the Kommune Platforms"}},
      {text: {danish: "Labs besøg og workshops for studerende", english: "Labs visits and student maker workshops"}},
    ],
    12: [
      {span: 3, text: {danish: "Frokost", english: "Lunch break"}},
    ],
    13: [
      {hours: 2, text: {danish: "SKOV: Mulighed for at Besøge Kommune Platforme", english: "FOREST: Visit the Kommune Platforms"}},
      {
        hours: 2,
        text: {danish: "Labs besøg og workshops for studerende", english: "Labs visits and student maker workshops"},
      },
      {
        hours: 5,
        text: {
          danish: "BIRK DESIGN WALK Udendørs",
          english: "BIRK DESIGN WALK Outside",
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
      {text: {danish: "WORKSHOP: Hacking Maker Station Skærme ", english: "WORKSHOP: Hacking Maker Station Screens"}},
    ],
    17: [
      {text: {danish: "MUSIK: Replica", english: "MUSIC: Replica"}},
    ],
    18: [
      {span: 3, text: {danish: "Aftensmad", english: "Dinner break"}},
    ],
    19: [
      {
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
          danish: "BIRK DESIGN WALK Indendørs",
          english: "BIRK DESIGN WALK Inside",
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
      {text: {danish: "MAKER HULE P1: Repræsentanter fra hver Kommune", english: "MidtVest Makers Hule P1: Representatives from Kommunes"}},
      undefined,
      {
        hours: 5,
        text: {
          danish: "BIRK DESIGN WALK Indendørs",
          english: "BIRK DESIGN WALK Inside",
        },
      },
    ],
    14: [
      {text: {danish: "MAKER HULE P2: Åben tilmelding for alle", english: "MidtVest Makers Hule P2: Open Call and Competition"}},
    ],
    15: [
      {text: {danish: "TALK: Digital Craftsmanship", english: "TALK: Digital Craftsmanship"}},
    ],
    16: [
      {text: {danish: "KAFFE: Makers Lounge", english: "COFFEE: Makers Lounge"}},
      {text: {danish: "MidtVest Maker Fest STAKEHOLDERS MØDE", english: "MidtVest Maker Fest STAKEHOLDERS MEETING"}},
    ],
    17: [
      {text: {danish: "MUSIK: DJ Rishanthan Rajarajan", english: "MUSIC: DJ Rishanthan Rajarajan"}},
    ],
    18: [
      {span: 3, text: {danish: "Aftensmad", english: "Dinner break"}},
    ],
    19: [
      {hours: 2, text: {danish: "MUSIC: DJ Rishanthan Rajarajan", english: "MUSIC: DJ Rishanthan Rajarajan"}},
    ],
    20: [null],
  },
  "2022-09-24": {
    9: [
      {
        hours: 3,
        text: {
          danish: <>
            PRÆSENTATION: Teknologi "Makers" and Cases<br/><br/>
            SKOV: Mulighed for at Besøge Kommune Platforme
          </>,
          english: <>
            PRESENTATION: Industry 'Makers' Show Cases<br/><br/>
            FOREST: Visit the Kommune Platforms
          </>,
        },
      },
      undefined,
      {
        hours: 3,
        text: {
          danish: "BIRK DESIGN WALK Inden- og Udendørs ",
          english: "BIRK DESIGN WALK Inside and Outside",
        },
      },
    ],
    10: [null],
    11: [null],
  },
}


export const Program: FC = () => {
  const languageContext = useContext(LanguageContext)

  document.title = "MVMF 2022 | Program"

  return <>
    <Header title="Program" backURl="/" style={{background: "#E7E7E7"}} xs={12} lg={7} xl={6} sticky/>
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

              <table id={day}>
                <tbody>
                {Object.entries(hours).map(([hour, [ev1, ev2, ev3]], i) => (
                  <tr key={i} id={!i ? day : ""}>
                    <td className="time">
                      <div>{hour.padStart(2, "0")}.00-{String(Number(hour) + 1).padStart(2, "0")}.00</div>
                    </td>
                    {ev1 ?
                      <td colSpan={ev1.span ?? 1} rowSpan={ev1.hours ?? 1}>{ev1.text[languageContext.language]}</td>
                      :
                      ev1 === null ? null :
                        ((!i || ev2 !== null || ev3 !== null) && <td className="empty"/>)}
                    {ev2 ?
                      <td colSpan={ev2.span ?? 1} rowSpan={ev2.hours ?? 1}>{ev2.text[languageContext.language]}</td>
                      :
                      ev2 === null ? null :
                        ((!i || ev3 !== null) && <td className="empty"/>)}
                    {ev3 ?
                      <td colSpan={ev3.span ?? 1} rowSpan={ev3.hours ?? 1}>{ev3.text[languageContext.language]}</td>
                      :
                      ev3 === null ? null :
                        (!i && <td className="empty"/>)}
                  </tr>
                ))}
                </tbody>
              </table>
            </>
          })}
        </Col>
      </Row>
    </Container>
  </>
}