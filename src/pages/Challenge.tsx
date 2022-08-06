import {FC, useContext} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

export const title: Record<TLanguage, string> = {danish: "MVMF Challenge", english: "MVMF Challenge"}

const text: Record<TLanguage, (JSX.Element | string)[]> = {
  danish: [
    <p className="text-center">
      Are you a digital crafts person?<br/>
      Are you a maker who uses digital tools?<br/>
      Do you build and make things and objects using tools like 3D printers, laser cutters, computer aided design or any
      other digital tool?<br/>
    </p>,
    <p className="text-center">
      Then we are interested in your work!
    </p>,
    <p className="mt-5">What do you need to participate?</p>,
    <ul>
      <li className="fw-bold">
        The challenge period is open from 10<sup>th</sup> of August to 10<sup>th</sup> of September.
      </li>
      <li>
        Within this month you can submit your entry as a maximum of 3 pages as a pdf (Including photos and description).
      </li>
      <li>Choose one or more categories from the design briefs to apply.</li>
      <li>(The design briefs will be out on the 10<sup>th</sup> of August)</li>
      <li>
        Send your entry to <a href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> with subject title as “MVMF
        Challenge (number)”.
      </li>
      <li className="fw-bold">
        We will inform you on the 14<sup>th</sup> of September if your entry has been selected to participate in the
        MidtVest Makers Hule on the 23<sup>th</sup> of September.
      </li>
    </ul>,
  ],
  english: [
    <p className="text-center">
      Are you a digital crafts person?<br/>
      Are you a maker who uses digital tools?<br/>
      Do you build and make things and objects using tools like 3D printers, laser cutters, computer aided design or any
      other digital tool?<br/>
    </p>,
    <p className="text-center">
      Then we are interested in your work!
    </p>,
    <p className="mt-5">What do you need to participate?</p>,
    <ul>
      <li className="fw-bold">
        The challenge period is open from 10<sup>th</sup> of August to 10<sup>th</sup> of September.
      </li>
      <li>
        Within this month you can submit your entry as a maximum of 3 pages as a pdf (Including photos and description).
      </li>
      <li>Choose one or more categories from the design briefs to apply.</li>
      <li>(The design briefs will be out on the 10<sup>th</sup> of August)</li>
      <li>
        Send your entry to <a href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> with subject title as “MVMF
        Challenge (number)”.
      </li>
      <li className="fw-bold">
        We will inform you on the 14<sup>th</sup> of September if your entry has been selected to participate in the
        MidtVest Makers Hule on the 23<sup>th</sup> of September.
      </li>
    </ul>,
  ],
}


export const Challenge: FC = () => {
  const languageContext = useContext(LanguageContext)

  return <>
    <Container>
      <Row>
        <Col xs={12} lg={7} xl={6} className="mx-auto">
          <h2 className="text-center fw-bold my-5">
            MIDTVEST MAKER FEST CHALLENGE
          </h2>
          {text[languageContext.language].map((p, i) => typeof p === "string" ? <p key={i}>{p}</p> : p)}
        </Col>
      </Row>
    </Container>
  </>
}