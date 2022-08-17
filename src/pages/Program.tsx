import {FC, useContext, useRef} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import {colors} from "../colors"
import {LanguageContext, TLanguage} from "../context/LanguageContext"
import {title as challengeTitle} from "./Challenge"
import "./Program.css"


interface IEvent {
  text: Record<TLanguage, string | JSX.Element>
  details?: Record<TLanguage, string | JSX.Element>
  location?: Record<TLanguage, string>
  hours?: number
  span?: number
}


const location: Record<TLanguage, string> = {
  danish: "LOKATIONER",
  english: "LOCATIONS",
}

const headers: Record<TLanguage, [string, string, string]> = {
  danish: [
    "Maker-skov",
    "BTECH-labs",
    "Oplev Birk",
  ],
  english: [
    "Maker Forest",
    "BTECH Labs",
    "Experience Birk",
  ],
}

const locations: Record<string, Record<TLanguage, string>> = {
  mainStage: {danish: "Hovedscenen", english: "Main stage"},
  btechPlatform: {danish: "ENGTECH-platform", english: "ENGTECH platform"},
}

const events: Record<string, Record<number, [IEvent | null | undefined] | [IEvent | null | undefined, IEvent | null] | [IEvent | null | undefined, IEvent | null | undefined, IEvent | null]>> = {
  "2022-09-22": {
    10: [
      {
        location: locations.mainStage,
        text: {
          danish: "Åbning og velkomst af MVMF + Introduktion til kommunerne",
          english: "Opening and welcome to MVMF + introduction of the municipalities",
        },
      },
    ],
    11: [
      {text: {danish: <>Mulighed for at besøge kommune&#8203;platforme</>, english: "Visit to the municipality platforms"}},
      {text: {danish: "Labs besøg og workshops for studerende", english: "Labs visits and student maker workshops"}},
    ],
    12: [
      {span: 3, text: {danish: "Frokost", english: "Lunch break"}},
    ],
    13: [
      {
        hours: 2,
        text: {danish: "Mulighed for at besøge kommune-platforme", english: "Visit to the municipality platforms"},
      },
      {
        hours: 2,
        text: {danish: "Labs-besøg og workshops for studerende", english: "Labs visits and student maker workshops"},
      },
      {
        hours: 5,
        text: {
          danish: <>BIRK DESIGN WALK<br/>Haver</>,
          english: <>BIRK DESIGN WALK<br/>Gardens</>,
        },
      },
    ],
    14: [
      undefined,
    ],
    15: [
      {text: {danish: "Kaffe og maker-kage", english: "Coffee break and maker cake"}},
    ],
    16: [
      {
        location: locations.btechPlatform,
        text: {danish: "WORKSHOP: Hacking Maker Station Skærme ", english: "WORKSHOP: Hacking maker station screens"},
      },
    ],
    17: [
      {location: locations.mainStage, text: {danish: "MUSIK: Replica", english: "MUSIC: Replica"}},
    ],
    18: [
      {span: 3, text: {danish: "Aftensmad", english: "Dinner break"}},
    ],
    19: [
      {
        location: locations.mainStage,
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
        location: locations.mainStage,
        hours: 2,
        text: {
          danish: "PRÆSENTATION: Forskellige forretnings-makers og projekter fra MidtVest                                                                                   ",
          english: "PRESENTATIONS: 'Making' business in Midtvest",
        },
      },
      {
        text: {
          danish: "WORKSHOP 1: Prototyper med open-source hardware",
          english: "WORKSHOP 1: Prototyping with open source hardware",
        },
      },
      {
        hours: 3,
        text: {
          danish: <>BIRK DESIGN WALK<br/>Museum</>,
          english: <>BIRK DESIGN WALK<br/>Museum</>,
        },
      },
    ],
    10: [
      {
        text: {
          danish: "WORKSHOP 2: Laser cutting and 3D printing",
          english: "WORKSHOP 2: Laser-cutting og 3D-printing",
        },
      },
    ],
    11: [
      {
        location: locations.mainStage,
        text: {
          danish: "PANELDEBAT: med udvalgte makers fra MidtVest",
          english: "PANEL DISCUSSION: 'Making' business in MidtVest",
        },
      },
      {
        text: {
          danish: "WORKSHOP 3: Wooden drones in supply chains",
          english: "WORKSHOP 3: Droner af træ i forsyningskæde",
        },
      },
    ],
    12: [
      {span: 3, text: {danish: "Frokost", english: "Lunch break"}},
    ],
    13: [
      {
        location: locations.mainStage,
        hours: 2,
        text: {
          danish: <>MIDTVEST MAKER UDFORDRING: Åben for alle, se mere her: <Link
            to="/challenge">{challengeTitle.danish}</Link> for
            tilmelding</>,
          english: <>MIDTVEST MAKERS CHALLENGE: Open call, see more here: <Link
            to="/challenge">{challengeTitle.english}</Link> for joining</>,
        },
      },
      {
        text: {
          danish: "WORKSHOP 4: Crafting digital",
          english: "WORKSHOP 4: Crafting digital",
        },
      },
      {
        hours: 5,
        text: {
          danish: <>BIRK DESIGN WALK<br/>Museum</>,
          english: <>BIRK DESIGN WALK<br/>Museum</>,
        },
      },
    ],
    14: [
      null,
    ],
    15: [
      {
        location: locations.mainStage,
        text: {danish: "KEYNOTE: Digital Craftsmanship", english: "KEYNOTE: Digital Craftsmanship"},
      },
    ],
    16: [
      {
        location: locations.mainStage,
        text: {
          danish: "Fireside talk modereret af Bæredygtig Herning",
          english: "Fireside talk moderated by Bæredygtig Herning",
        },
      },
    ],
    17: [
      {
        location: locations.mainStage,
        text: {danish: "MUSIK: DJ Rishanthan Rajarajan", english: "MUSIC: DJ Rishanthan Rajarajan"},
      },
    ],
    18: [
      {span: 3, text: {danish: "Aftensmad", english: "Dinner break"}},
    ],
    19: [
      {
        location: locations.mainStage,
        hours: 2,
        text: {danish: "MUSIK: DJ Rishanthan Rajarajan", english: "MUSIC: DJ Rishanthan Rajarajan"},
      },
    ],
    20: [null],
  },
  "2022-09-24": {
    9: [
      {
        location: locations.mainStage,
        hours: 3,
        text: {
          danish: <>Mulighed for at besøge kommune&#8203;platforme</>,
          english: "Visit to the municipality platforms",
        },
      },
      undefined,
      {
        hours: 3,
        text: {
          danish: <>BIRK DESIGN WALK<br/>Museer og haver</>,
          english: <>BIRK DESIGN WALK<br/>Museums and gardens</>,
        },
      },
    ],
    10: [null],
    11: [null],
  },
}

export const title: Record<TLanguage, string> = {
  danish: "Program",
  english: "Programme",
}


export const Program: FC = () => {
  const languageContext = useContext(LanguageContext)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <Container id="program" style={{marginBottom: "30vh"}} ref={containerRef} fluid>
      <Row className="mb-5 pb-5">
        <Col xs={12} lg={7} xl={6} className="mx-auto p-0">
          <div style={{background: colors.au7comp, color: colors.au7, marginBottom: -2}} className="text-center pt-2">
            {location[languageContext.language]}
          </div>

          <table className="sticky-top" style={{zIndex: 1020}}>
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

          <p className="px-2 px-lg-0 pt-4 text-xsmall">
            {languageContext.language === "danish" && "Programmet er foreløbigt, ændringer kan forekomme"}
            {languageContext.language === "english" && "The program is preliminary, changes may occur"}
          </p>

          {Object.entries(events).map(([day, hours], j) => {
            const date = new Date(day)

            return [
              <div key={0} className="my-3 sticky-top text-xsmall ps-1 d-inline-block pointer"
                   style={{
                     height: "4.50rem", width: "calc(10% + 1px)",
                     zIndex: 1120 + j + 1,
                     background: colors.au7comp,
                     color: colors.au7,
                   }}
                   onClick={() => {
                     const top = containerRef.current?.querySelector(`#day${day}`)?.getBoundingClientRect().top ?? 380
                     if (top >= 380) return
                     containerRef.current?.parentElement?.scrollBy({top: top - 380})
                   }}>
                {date.toLocaleString(languageContext.locale, {day: "numeric"})}<br/>
                {date.toLocaleString(languageContext.locale, {month: "short"})}
              </div>,
              <table key={1} id={`day${day}`} className="border-separate">
                <tbody>
                {Object.entries(hours).map(([hour, [ev1, ev2, ev3]], i) => {
                  let col1: JSX.Element | null = null
                  let col2: JSX.Element | null = null
                  let col3: JSX.Element | null = null

                  if (ev1) col1 = <td colSpan={ev1.span ?? 1} rowSpan={ev1.hours ?? 1}>
                    {ev1.location &&
                      <div style={{fontSize: "75%"}}><em>{ev1.location[languageContext.language]}</em></div>}
                    {ev1.text[languageContext.language]}
                  </td>
                  else if (ev1 === null) col1 = null
                  else if (ev2 || ev3) col1 = <td className="empty"/>
                  else if (i === 0) col1 = <td className="empty"/>

                  if (ev2) col2 = <td colSpan={ev2.span ?? 1} rowSpan={ev2.hours ?? 1}>
                    {ev2.location &&
                      <div style={{fontSize: "75%"}}><em>{ev2.location[languageContext.language]}</em></div>}
                    {ev2.text[languageContext.language]}
                  </td>
                  else if (ev2 === null) col2 = null
                  else if (ev3) col2 = <td className="empty"/>
                  else if (i === 0) col2 = <td className="empty"/>

                  if (ev3) col3 = <td colSpan={ev3.span ?? 1} rowSpan={ev3.hours ?? 1}>
                    {ev3.location &&
                      <div style={{fontSize: "75%"}}><em>{ev3.location[languageContext.language]}</em></div>}
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
              </table>,
            ]
          })}
        </Col>
      </Row>
    </Container>
  )
}