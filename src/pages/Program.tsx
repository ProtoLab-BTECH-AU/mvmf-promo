import {FC, useContext, useEffect, useRef, useState} from "react"
import {Col, Container, Modal, Row} from "react-bootstrap"
import {colors} from "../colors"
import {LanguageContext, TLanguage} from "../context/LanguageContext"
import "./Program.css"


interface IEvent {
  text: Record<TLanguage, string | JSX.Element>
  title?: Record<TLanguage, string | JSX.Element>
  details?: Record<TLanguage, string | JSX.Element>
  location?: Record<TLanguage, string>
  hours?: number
  span?: number
}


const warning: Record<TLanguage, string> = {
  danish: "Bemærk venligst, at programmet og aktiviteterne sandsynligvis vil ændre sig baseret på interesse og tilmeldinger af deltagere.",
  english: "Kindly note that, based on the interest and registrations from participants, the program and activities are likely to change.",
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

// noinspection SpellCheckingInspection
const events: Record<string, Record<number, [IEvent | null | undefined] | [IEvent | null | undefined, IEvent | null] | [IEvent | null | undefined, IEvent | null | undefined, IEvent | null]>> = {
  "2022-09-22": {
    10: [
      {
        location: locations.mainStage,
        title: {danish: "Åbning af MVMF", english: "Opening MVMF"},
        text: {
          danish: "Åbning og velkomst af MVMF af Anders Fredriksen institutleder på AU i Herning + Introduktion til platformene i maker-skoven",
          english: "Welcome address by Anders Fredriksen Head of Department at AU in Herning. Followed by introduction to the platforms in the maker forest",
        },
      },
    ],
    11: [
      {
        location: locations.mainStage,
        title: {danish: "BTECH Research Seminar", english: "BTECH Research Seminar"},
        text: {
          danish: "Præsentation med professor Cindy Kohtala fra Umeå Universitet  ",
          english: "Presentation by Professor Cindy Kohtala from Umeå University",
        },
      },
      {
        title: {danish: "Student maker-workshops", english: "Student Maker Workshops"},
        text: {
          danish: "Workshops for studerende og elever samt laboratorie-besøg til PROTO* Lab, DIGI og Concept Development Lab",
          english: "Lab visits to PROTO* Lab, DIGI Lab, and Concept Development Lab and introduction to workshop briefs",
        },
      },
    ],
    12: [
      {span: 3, title: {danish: "Frokostpause", english: "Lunch break"}, text: {danish: "", english: ""}},
    ],
    13: [
      {
        hours: 3,
        title: {danish: "Platform besøg", english: "Platform Visit"},
        text: {
          danish: "Mulighed for at besøge platformene i maker-skoven modereret af blandt andre Elværket fra Skive, ITC fra Ringkøbing-Skjern og forskellige laboratorier fra AU i Herning",
          english: "Visit the municipality platforms in the maker forest with Elværket from Skive, ITC from Ringkøbing-Skjern, and labs from AU in Herning",
        },
      },
      {
        hours: 3,
        title: {danish: "Student maker-workshops", english: "Student Maker Workshops"},
        text: {
          danish: "Workshops for studerende og elever samt laboratorie-besøg",
          english: <>
            PROTO* Lab<br/>
            Concept Development Lab<br/>
            DIGI Lab<br/>
            Drone Lab
          </>,
        },
      },
      {
        hours: 5,
        title: {danish: "Birk design walk", english: "Birk Design Walk"},
        text: {
          danish: "Haver",
          english: "Gardens",
        },
      },
    ],
    14: [undefined],
    15: [undefined],
    16: [
      {
        location: locations.mainStage,
        title: {danish: "Ice Cream and Reflections", english: "Ice Cream and Reflections"},
        text: {
          danish: "Maker-is fra Vildis og fællesopsamling på workshops",
          english: "Maker icecream from Vildis and reflections from the workshops",
        },
      },
    ],
    17: [
      {
        location: locations.mainStage,
        title: {danish: "MUSIK", english: "MUSIC"},
        text: {danish: "DJ Rishanthan Rajarajan", english: "DJ Rishanthan Rajarajan"},
      },
    ],
    18: [
      {span: 3, title: {danish: "Aftensmad", english: "Dinner break"}, text: {danish: "", english: ""}},
    ],
    19: [
      {
        location: locations.mainStage,
        hours: 2,
        title: {danish: "Musik", english: "Music"},
        text: {danish: "DJ Rishanthan Rajarajan", english: "DJ Rishanthan Rajarajan"},
      },
    ],
    20: [undefined],
  },
  "2022-09-23": {
    10: [
      {
        location: locations.mainStage,
        hours: 1,
        title: {danish: "Maker-forretning", english: "Maker business"},
        text: {
          danish: "Industrien fortæller om maker-teknologier fra blandt andet Steffen Haslund Schmidt fra Danish AM Hub, Brian Lykke Christensen fra Teknologisk institut og Kevin James Egan fra eduard.dk",
          english: "Talks from the industry on maker technologies: Steffen Haslund Schmidt from Danish AM Hub, Brian Lykke Christensen from Technological Institute, and Kevin James Egan from eduard.dk",
        },
      },
      undefined,
      {
        hours: 2,
        title: {danish: "Birk design walk", english: "Birk Design Walk"},
        text: {
          danish: "Museum",
          english: "Museum",
        },
      },
    ],
    11: [
      {
        location: locations.mainStage,
        title: {danish: "Paneldebat", english: "Panel Discussion"},
        text: {
          danish: "At anvende maker-teknologier til at fremme forretning i MidtVest",
          english: "'Making business’ in MidtVest with maker-technologies",
        },
      },
    ],
    12: [
      {span: 3, title: {danish: "Frokostpause", english: "Lunch break"}, text: {danish: "", english: ""}},
    ],
    13: [
      {
        hours: 2,
        title: {danish: "Platform besøg", english: "Platform Visit"},
        text: {
          danish: "Mulighed for at besøge platformene i maker-skoven modereret af blandt andre Elværket fra Skive, ITC fra Ringkøbing-Skjern og forskellige laboratorier fra AU i Herning",
          english: "Visit the municipality platforms in the maker forest with Elværket from Skive, ITC from Ringkøbing-Skjern, and labs from AU in Herning",
        },
      },
      undefined,
      {
        hours: 5,
        title: {danish: "Birk design walk", english: "Birk Design Walk"},
        text: {
          danish: "Museum",
          english: "Museum",
        },
      },
    ],
    14: [undefined],
    15: [
      {
        location: locations.mainStage,
        title: {danish: "Festival keynote", english: "Festival Keynote"},
        text: {
          danish: "Professor Cindy Kohtala fra Umeå universitet om bæredygtig design",
          english: "Professor Cindy Kohtala from Umeå University on how to design for sustainability",
        },
      },
    ],
    16: [
      {
        location: locations.mainStage,
        title: {danish: "Fireside talk", english: "Fireside Talk"},
        text: {
          danish: "Morten Rønde Rasmussen fra Bæredygtig Herning og Peter Dahl fra Spinderihallerne kommer til en uformed samtale i deres komfortable grønne sofaer",
          english: "Morten Rønde Rasmussen from Bæredygtig Herning and Peter Dahl from FabLab Spinderihallerne Vejle on comfortable green sofas",
        },
      },
    ],
    17: [
      {
        location: locations.mainStage,
        title: {danish: "Musik", english: "Music"},
        text: {danish: "Smashing Pumpkins Jam", english: "Smashing Pumpkins Jam"},
      },
    ],
    18: [
      {
        span: 3,
        title: {danish: "Aftensmad – Tak for at deltage!", english: "Dinner break – Thank you for coming!"},
        text: {danish: "", english: ""},
      },
    ],
  },
  "2022-09-24": {
    10: [
      {
        location: locations.mainStage,
        hours: 2,
        title: {
          danish: "Besøge kommunernes platformene i maker-skoven",
          english: "Visit the municipality platforms in the maker forest",
        },
        text: {
          danish: "Mulighed for at besøge platformene i maker-skoven modereret af blandt andre Elværket fra Skive, ITC fra Ringkøbing-Skjern og forskellige laboratorier fra AU i Herning",
          english: "With Elværket from Skive, ITC from Ringkøbing-Skjern, Eduard and labs from AU in Herning",
        },
      },
      undefined,
      {
        hours: 2,
        title: {danish: "Birk design walk", english: "Birk Design Walk"},
        text: {
          danish: "Museer og haver",
          english: "Museums and gardens",
        },
      },
    ],
    11: [undefined],
  },
}

export const title: Record<TLanguage, string> = {
  danish: "Program",
  english: "Programme",
}


export const Program: FC = () => {
  const languageContext = useContext(LanguageContext)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [eventDetails, setEventDetails] = useState<IEvent | null>(null)

  useEffect(() => setShowDetails(!!eventDetails), [eventDetails])
  useEffect(() => {
    if (!showDetails) setEventDetails(null)
  }, [showDetails])

  return <>
    <Modal className="rounded-0 border-0" show={showDetails} onHide={() => setShowDetails(false)} centered>
      <Modal.Header className="border-0" style={{backgroundColor: "#D9B6A1"}} closeButton/>
      <Modal.Body style={{backgroundColor: "#D9B6A1"}}>
        {(eventDetails?.details ?? {})[languageContext.language]}
      </Modal.Body>
    </Modal>

    <Container id="program" style={{marginBottom: "30vh"}} ref={containerRef} fluid>
      <Row className="mb-5 pb-5">
        <Col xs={12} lg={7} xl={6} className="mx-auto p-0">
          <div style={{background: colors.au7comp, color: colors.au7, marginBottom: -2, paddingLeft: "10%"}}
               className="text-center pt-2">
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

          <p className="px-2 px-lg-0 pt-4 text-xsmall" style={{fontSize: "75%"}}>
            {warning[languageContext.language]}
          </p>

          {Object.entries(events).map(([day, hours], j) => {
            const date = new Date(day)

            return <>
              <div className="my-3 sticky-top text-xsmall ps-1 d-inline-block pointer"
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
              </div>
              <table id={`day${day}`} className="border-separate">
                <tbody>
                {Object.entries(hours).map(([hour, [ev1, ev2, ev3]], i) => {
                  let col1: JSX.Element | null = null
                  let col2: JSX.Element | null = null
                  let col3: JSX.Element | null = null

                  if (ev1) col1 = <td
                    colSpan={ev1.span ?? 1} rowSpan={ev1.hours ?? 1}
                    onClick={ev1.details && (() => setEventDetails(ev1))}
                    className={ev1.details && "pointer"}>
                    {ev1.location &&
                      <div className="text-xsmall"><em><strong>{ev1.location[languageContext.language]}</strong></em>
                      </div>}
                    {ev1.details && <span className="position-absolute top-0 end-0 pe-1 text-small fw-bold"
                                          style={{lineHeight: 1}}>+</span>}
                    {ev1.title && <h3 className="fw-bold">{ev1.title[languageContext.language]}</h3>}
                    <div className="text-xsmall" style={{lineHeight: 1.25}}>{ev1.text[languageContext.language]}</div>
                  </td>
                  else if (ev1 === null) col1 = null
                  else if (ev2 || ev3) col1 = <td className="empty"/>
                  else if (i === 0) col1 = <td className="empty"/>

                  if (ev2) col2 = <td
                    colSpan={ev2.span ?? 1} rowSpan={ev2.hours ?? 1}
                    onClick={ev2.details && (() => setEventDetails(ev2))}
                    className={ev2.details && "pointer"}>
                    {ev2.location &&
                      <div className="text-xsmall"><em><strong>{ev2.location[languageContext.language]}</strong></em>
                      </div>}
                    {ev2.details && <span className="position-absolute top-0 end-0 pe-2 fw-bold">+</span>}
                    {ev2.title && <h3 className="fw-bold">{ev2.title[languageContext.language]}</h3>}
                    <div className="text-xsmall" style={{lineHeight: 1.25}}>{ev2.text[languageContext.language]}</div>
                  </td>
                  else if (ev2 === null) col2 = null
                  else if (ev3) col2 = <td className="empty"/>
                  else if (i === 0) col2 = <td className="empty"/>

                  if (ev3) col3 = <td
                    colSpan={ev3.span ?? 1} rowSpan={ev3.hours ?? 1}
                    onClick={ev3.details && (() => setEventDetails(ev3))}
                    className={ev3.details && "pointer"}>
                    {ev3.location &&
                      <div className="text-xsmall"><em><strong>{ev3.location[languageContext.language]}</strong></em>
                      </div>}
                    {ev3.details && <span className="position-absolute top-0 end-0 pe-2 fw-bold">+</span>}
                    {ev3.title && <h3 className="fw-bold">{ev3.title[languageContext.language]}</h3>}
                    <div className="text-xsmall" style={{lineHeight: 1.25}}>{ev3.text[languageContext.language]}</div>
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