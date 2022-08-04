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
    "Maker skov",
    "BTECH labs",
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
    9: [
      {text: {danish: "Kommune Platform Setup", english: "Kommune Platform Setup"}},
    ],
    10: [
      {text: {danish: "Welcome Speech", english: "Welcome Speech"}},
    ],
    11: [
      {text: {danish: "STUDENT ACTIVITY: BTECH Labs Visit", english: "STUDENT ACTIVITY: BTECH Labs Visit"}},
    ],
    12: [
      {span: 3, text: {danish: "Lunch break", english: "Lunch break"}},
    ],
    13: [
      {text: {danish: "STUDENT ACTIVITY: BTECH Labs Visit", english: "STUDENT ACTIVITY: BTECH Labs Visit"}},
    ],
    14: [
      {
        text: {
          danish: "STUDENT ACTIVITY: Making at Kommune Platforms",
          english: "STUDENT ACTIVITY: Making at Kommune Platforms",
        },
      },
    ],
    15: [
      {text: {danish: "COFFEE BREAK: Maker Kage and Kaffe", english: "COFFEE BREAK: Maker Kage and Kaffe"}},
      undefined,
      {
        hours: 3,
        text: {
          danish: <>
            BIRK DESIGN WALK<br/>
            1) Sculpture Parken<br/>
            2) De Geometriske Haver<br/>
            3) Elia
          </>,
          english: <>
            BIRK DESIGN WALK<br/>
            1) Sculpture Parken<br/>
            2) De Geometriske Haver<br/>
            3) Elia
          </>,
        },
      },
    ],
    16: [
      {text: {danish: "WORKSHOP: Hacking Maker Station Screens", english: "WORKSHOP: Hacking Maker Station Screens"}},
      {text: {danish: "Citizens project showcase", english: "Citizens project showcase"}},
    ],
    17: [
      {text: {danish: "MUSIC: Replica", english: "MUSIC: Replica"}},
    ],
    18: [
      {span: 3, text: {danish: "Dinner break", english: "Dinner break"}},
    ],
    19: [
      {
        hours: 2,
        text: {
          danish: "MUSIC: Smashing Pumpkins Jam",
          english: "MUSIC: Smashing Pumpkins Jam",
        },
      },
      undefined,
      {hours: 2, text: {danish: "SAA Event", english: "SAA Event"}},
    ],
    20: [undefined],
  },
  "2022-09-23": {
    9: [
      {
        hours: 2,
        text: {
          danish: "PRESENTATIONS: 'Making' Business in Midtvest",
          english: "PRESENTATIONS: 'Making' Business in Midtvest",
        },
      },
      {text: {danish: "WORKSHOP: IoT hardware and software", english: "WORKSHOP: IoT hardware and software"}},
      {
        hours: 3,
        text: {
          danish: <>
            BIRK DESIGN WALK<br/>
            1) Sculpture Parken<br/>
            2) De Geometriske Haver<br/>
            3) Elia
          </>,
          english: <>
            BIRK DESIGN WALK<br/>
            1) Sculpture Parken<br/>
            2) De Geometriske Haver<br/>
            3) Elia
          </>,
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
          danish: "PANEL DISCUSSION: 'Making' Business in Midtvest",
          english: "PANEL DISCUSSION: 'Making' Business in Midtvest",
        },
      },
      {text: {danish: "WORKSHOP: Making with laser cutting", english: "WORKSHOP: Making with laser cutting"}},
    ],
    12: [
      {span: 3, text: {danish: "Lunch break", english: "Lunch break"}},
    ],
    13: [
      {text: {danish: "COMPETITION: MV Makers Hule 1", english: "COMPETITION: MV Makers Hule 1"}},
    ],
    14: [
      {text: {danish: "COMPETITION: MV Makers Hule 2", english: "COMPETITION: MV Makers Hule 2"}},
    ],
    15: [
      {text: {danish: "KEYNOTE: Digital Craftsmanship", english: "KEYNOTE: Digital Craftsmanship"}},
    ],
    16: [
      {text: {danish: "MAKERS LOUNGE", english: "MAKERS LOUNGE"}},
      {text: {danish: "MVMF STAKEHOLDERS MEETING", english: "MVMF STAKEHOLDERS MEETING"}},
    ],
    17: [
      {text: {danish: "MUSIC: DJ/VJ", english: "MUSIC: DJ/VJ"}},
      undefined,
      {text: {danish: "SAA Event", english: "SAA Event"}},
    ],
    18: [
      {span: 3, text: {danish: "Dinner break", english: "Dinner break"}},
    ],
    19: [
      {hours: 2, text: {danish: "MUSIC: DJ/VJ", english: "MUSIC: DJ/VJ"}},
      undefined,
      {hours: 2, text: {danish: "SAA Event", english: "SAA Event"}},
    ],
    20: [null],
  },
  "2022-09-24": {
    9: [
      {
        hours: 3,
        text: {
          danish: "PRESENTATIONS: MV Maker Market + Tech makers sponsors showcase",
          english: "PRESENTATIONS: MV Maker Market + Tech makers sponsors showcase",
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