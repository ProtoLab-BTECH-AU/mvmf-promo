import {FC, useContext, useState} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {colors} from "../colors"
import {LanguageContext, TLanguage} from "../context/LanguageContext"

export const title: Record<TLanguage, string> = {danish: "Udfordring", english: "Challenge"}
const challenge: Record<TLanguage, string> = {danish: "Udfordring", english: "Challenge"}
const close: Record<TLanguage, string> = {danish: "Luk", english: "Close"}

const text1: Record<TLanguage, (JSX.Element | string)[]> = {
  danish: [
    <h2 className="text-center fw-bold my-5">
      MIDTVEST MAKER FEST UDFORDRING
    </h2>,
    <p className="text-center">
      Er du en digital håndværker?<br/>
      Er du en maker, der bruger digitale værktøjer?<br/>
      Skaber og laver du objekter og produkter ved hjælp af værktøjer som 3D-printere, laserskærere, computerstøttet
      design eller ethvert andet digitalt værktøj?<br/>
    </p>,
    <p className="text-center fw-bold">
      Så er vi interesserede i dit arbejde!
    </p>,
    <p>
      Ved MidtVest Maker Fest Challenge modtager vinderne en pris og muligheden for at samarbejde om produktudvikling
      med BTECH Labs på Aarhus Universitet i Herning.
    </p>,
    <p className="text-center fw-bold">
      <span className="me-4">@btech_herning</span> <span className="ms-4">#mvmf2022</span>
    </p>,
  ],
  english: [
    <h2 className="text-center fw-bold my-5">
      MIDTVEST MAKER FEST CHALLENGE
    </h2>,
    <p className="text-center">
      Are you a digital crafts person?<br/>
      Are you a maker who uses digital tools?<br/>
      Do you build and make things and objects using tools like 3D printers, laser cutters, computer aided design or
      any other digital tool?<br/>
    </p>,
    <p className="text-center fw-bold">
      Then we are interested in your work!
    </p>,
    <p>
      At the MidtVest Maker Fest Challenge winners will receive an award and the possibility to collaborate on product
      development with BTECH Labs at Aarhus university in Herning.
    </p>,
    <p className="text-center fw-bold">
      <span className="me-4">@btech_herning</span> <span className="ms-4">#mvmf2022</span>
    </p>,
  ],
}

const text2: Record<TLanguage, (JSX.Element | string)[]> = {
  danish: [
    <p>Hvad skal du gøre for at deltage?</p>,
    <ul>
      <li className="fw-bold">
        Perioden for deltagelse i denne udfordring er fra 11. august til 11. september 2022
      </li>
      <li>
        Inden for denne måned kan du indsende dit bidrag som maksimalt fylder 3 sider i pdf-format (inklusive fotos og
        beskrivelse).
      </li>
      <li>
        Vælg en eller flere kategorier af udfordringer (uddybning for hver kategori kan findes med at klikke på de
        forskellige orange felter).
      </li>
      <li>
        Send dit bidrag med pdf'en som vedhæftet fil til <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> med emnetitel som "MVMF Challenge XX". Maksimal
        filstørrelse for den vedhæftede pdf er 10 MB.
      </li>
      <li className="fw-bold">
        Vi informerer dig/jer den 14. september, om dit bidrag er blevet valgt og om din/jeres deltagelse i at
        præsentere til MidtVest Maker Fest 2022 fredag den 23. september.
      </li>
      <li>
        Del gerne jeres proces med at arbejde med udfordringer
        med <strong>#mvmf2022</strong> og <strong>@btech_herning</strong> så vi kan følge med!
      </li>
    </ul>,
    <div className="mt-5" style={{borderBottom: ".2175rem solid var(--au-color-7-comp)"}}/>,
    <h4 className="text-center fw-bold mb-3 mt-5">
      UDVÆLGELSESKRITERIER FOR ALLE 3 KATEGORIER
    </h4>,
    <p>
      Designobjektet eller produktet kan være noget, du allerede har lavet, eller så kan du lave et nyt objekt indtil
      deadline, som er <strong>den 11. september (23.59) 2022</strong>.
    </p>,
    <p>
      Berettigelsen til denne konkurrence er, at du er bosat i Danmark, og hvis dit bidrag er udvalgt af os, er du
      villig til at deltage fysisk ved <strong>MidtVest Maker Fest den 23. september 2022</strong> i Birk Centerpark,
      Herning.
    </p>,
  ],
  english: [
    <p>What do you need to participate?</p>,
    <ul>
      <li className="fw-bold">
        The challenge period is open from 11<sup>th</sup> of August to 11<sup>th</sup> of September.
      </li>
      <li>
        Within this month you can submit your entry as a maximum of 3 pages as a pdf (Including photos and
        description).
      </li>
      <li>
        Choose one or more categories from the design briefs to apply (more detail for each challenge can be found by
        clicking on the different orange boxes)
      </li>
      <li>
        Send your entry with the pdf as an attachment to <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> with subject title as “MVMF Challenge XX”. Maximum
        file size for the pdf attachment is 10mb.
      </li>
      <li className="fw-bold">
        We will inform you on the 14<sup>th</sup> of September if your entry has been selected to participate in the
        MidtVest Makers Fest on the 23<sup>rd</sup> of September.
      </li>
      <li>
        Feel free to share your process of working with challenges
        with <strong>#mvmf2022</strong> and <strong>@btech_herning</strong> so we can follow along!
      </li>
    </ul>,
    <div className="mt-5" style={{borderBottom: ".2175rem solid var(--au-color-7-comp)"}}/>,
    <h4 className="text-center fw-bold mb-3 mt-5">
      SELECTION CRITERIA FOR ALL 3 ENTRY CATEGORIES
    </h4>,
    <p>
      The design object or product can be something that you have already made or then you can make a new object by the
      deadline, which is the <strong>11<sup>th</sup> of September (23.59) 2022</strong>.
    </p>,
    <p>
      The eligibility for this competition is that you reside in Denmark and if your entry were selected by us then are
      willing to participate in the <strong>MidtVest Makers Fest on the 23<sup>rd</sup> of September 2022</strong> in
      person at Birk Centerpark, Herning.
    </p>,
  ],
}

const titleChallenges: Record<TLanguage, [string, string, string]> = {
  danish: ["3D Printing", "Laser-Cutting", "Interactive Object(s)"],
  english: ["3D Printing", "Laser-Cutting", "Interactive Object(s)"],
}

const textChallenges: Record<TLanguage, [(JSX.Element | string)[], (JSX.Element | string)[], (JSX.Element | string)[]]> = {
  danish: [
    [
      <h4 className="text-center fw-bold mb-4">Udfordring 01: 3D Printing</h4>,
      <ul>
        <li>
          Du/din gruppe, har anvendt et hvilket som helst CAD-program til at modellere <strong>OG</strong> 3D-printe
          et objekt eller et produkt af enhver dimension.
        </li>
        <li>
          Dette objekt kan være til personlig brug, en prototype, et kunstnerisk udtryk eller endda et kommercielt
          produkt.
        </li>
        <li>
          3D-filen <strong>SKAL</strong> modelleres af deltageren/deltagerne til udfordringen. 3D-filer, der er
          downloadede fra internettet eller der er downloadede og herpå manipuleres, selv delvist, kvalificerer
          sig <strong>IKKE</strong>.
        </li>
        <li>
          3D-scanninger af objekter kvalificerer kun, <strong>HVIS</strong> du har scannet og genereret filen.
        </li>
        <li>
          Objektet kan være et 3D-print af ethvert materiale, f.eks. PLA, ABS, PETG, metal, keramik osv...
        </li>
      </ul>,
      "For at sende os dit bidrag, brug en A4-papirstørrelse (i enten liggende eller stående retning) og sammensæt den ved hjælp af følgende fire trin på maksimalt 3 sider i pdf-format:",
      <ol>
        <li>Angiv et navn/titel til dit indlæg.</li>
        <li>Indtast dine kontaktoplysninger, dit navn, dit e-mail-id og/eller telefonnummer.</li>
        <li>
          Skriv en frit flydende beskrivelse på maksimalt 300 ord for objektet. Hvor f.eks. følgende spørgsmål besvares:
          <ul className="fst-italic">
            <li>Hvad er objektet?</li>
            <li>Hvordan kan det bruges, og af hvem?</li>
            <li>Er det et kommercielt produkt, eller kan det omdannes til et?</li>
            <li>Eller hvad udtrykker det kunstnerisk?</li>
            <li>Hvordan besluttede du dig for at modellere og 3D-printe det?</li>
            <li>Hvordan modellerede du det? Hvilken printer brugte du?</li>
            <li>Hvad er historien bag dens tilblivelse?</li>
          </ul>
        </li>
        <li>
          Nedenfor den beskrivende tekst skal der inkluderes <strong>minimum 3 og højst 5 fotos af objektet inden for 3
          A4-sider</strong>.
        </li>
      </ol>,
      <p>
        Send os dit bidrag med pdf'en (max 10mb) som vedhæftet fil til <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> med emnetitel som <strong>MVMF
        Challenge-3DPrinting-navn/titel på dit bidrag.</strong>
      </p>,
    ],
    [
      <h4 className="text-center fw-bold mb-4">Udfordring 02: Laserskæring</h4>,
      <ul>
        <li>Du/din gruppe, har anvendt et hvilket som helst CAD-program til at modellere <strong>OG</strong> 3D-printe
          et objekt eller et produkt af enhver dimension.
        </li>
        <li>Dette objekt kan være til personlig brug, en prototype, et kunstnerisk udtryk eller endda et kommercielt
          produkt.
        </li>
        <li>3D-filen <strong>SKAL</strong> modelleres af deltageren/deltagerne til udfordringen. 3D-filer, der er
          downloadede fra internettet eller der er downloadede og herpå manipuleres, selv delvist, kvalificerer
          sig <strong>IKKE</strong>.
        </li>
        <li>Scannede tegninger er kun kvalificerede, <strong>HVIS</strong> du har scannet og genereret filen.</li>
        <li>Objektet kan være laserskåret af ethvert materiale, f.eks. træ, akryl, papir, læder osv...</li>
      </ul>,
      "For at sende os dit bidrag, brug en A4-papirstørrelse (i enten liggende eller stående retning) og sammensæt den ved hjælp af følgende fire trin på maksimalt 3 sider i pdf-format:",
      <ol>
        <li>Angiv et navn/titel til dit indlæg.</li>
        <li>Indtast dine kontaktoplysninger, dit navn, dit e-mail-id og/eller telefonnummer.</li>
        <li>
          Skriv en frit flydende beskrivelse på maksimalt 300 ord for objektet. Hvor f.eks. følgende spørgsmål besvares:
          <ul className="fst-italic">
            <li>Hvad er objektet?</li>
            <li>Hvordan kan det bruges, og af hvem?</li>
            <li>Er det et kommercielt produkt, eller kan det omdannes til et?</li>
            <li>Eller hvad udtrykker det kunstnerisk?</li>
            <li>Hvordan besluttede du dig for at modellere og 3D-printe det?</li>
            <li>Hvordan modellerede du det? Hvilken printer brugte du?</li>
            <li>Hvad er historien bag dens tilblivelse?</li>
          </ul>
        </li>
        <li>
          Nedenfor den beskrivende tekst skal der inkluderes <strong>minimum 3 og højst 5 fotos af objektet inden for 3
          A4-sider</strong>.
        </li>
      </ol>,
      <p>
        Send os dit bidrag med pdf'en (max 10mb) som vedhæftet fil til <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> med emnetitel som <strong>MVMF
        Challenge-Laserskæring-navn/titel på dit bidrag.</strong>
      </p>,
    ],
    [
      <h4 className="text-center fw-bold mb-4">Udfordring 03: Interaktive Objekt(er)</h4>,
      <ul>
        <li>Du/din gruppe har brugt elektronisk hardware <strong>OG</strong> software til at bygge og lave et
          interaktivt objekt/er eller et produkt (f.eks. Arduino, Raspberry Pi, ESP32 osv...)
        </li>
        <li>Dette objekt kan være til personlig brug, en prototype, et kunstnerisk udtryk eller endda et kommercielt
          produkt.
        </li>
        <li>Det indsendte <strong>SKAL</strong> have en hardware- og softwarekomponent og <strong>KAN IKKE</strong> kun
          være software. Genbrugt kode fra eksempelprojekter fra internettet er i orden til kvalificering,
          hovedkriterierne vil være den overbevisende fortælling og gestaltpræsentation af projektet.
        </li>
        <li>Projekter, der tilføjer hardware og software til at hacke eksisterende apparater, instrumenter eller
          værktøjer, er velkvalificerede som indgange.
        </li>
      </ul>,
      "For at sende os dit bidrag, brug en A4-papirstørrelse (i enten liggende eller stående retning) og sammensæt den ved hjælp af følgende fire trin på maksimalt 3 sider i pdf-format:",
      <ol>
        <li>Angiv et navn/titel til dit indlæg.</li>
        <li>Indtast dine kontaktoplysninger, dit navn, dit e-mail-id og/eller telefonnummer.</li>
        <li>
          Skriv en frit flydende beskrivelse på maksimalt 300 ord for objektet. Hvor f.eks. følgende spørgsmål besvares:
          <ul className="fst-italic">
            <li>Hvad er objektet?</li>
            <li>Hvordan kan det bruges, og af hvem?</li>
            <li>Er det et kommercielt produkt, eller kan det omdannes til et?</li>
            <li>Eller hvad udtrykker det kunstnerisk?</li>
            <li>Hvordan besluttede du dig for at modellere og 3D-printe det?</li>
            <li>Hvordan modellerede du det? Hvilken printer brugte du?</li>
            <li>Hvad er historien bag dens tilblivelse?</li>
          </ul>
        </li>
        <li>
          Nedenfor den beskrivende tekst skal der inkluderes <strong>minimum 3 og højst 5 fotos af objektet inden for 3
          A4-sider</strong>.
        </li>
        <li>
          Hvis det er relevant og nødvendigt, opfordres der til at et link til en uploadet video filmede på
          højkant &#8597; i 9:16 format (f.eks. på Youtube, Vimeo osv...) af projektet, men det er ikke obligatorisk.
          Husk at tilføje <strong>#mvmf2022</strong> og <strong>@btech_herning</strong>.
        </li>
      </ol>,
      <p>
        Send os dit bidrag med pdf'en (max 10mb) som vedhæftet fil til <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> med emnetitel som <strong>MVMF
        Challenge-Interaktiv Objekt-navn/titel på dit bidrag.</strong>
      </p>,
    ],
  ],
  english: [
    [
      <h4 className="text-center fw-bold mb-4">Challenge 01: On 3D Printing</h4>,
      <ul>
        <li>
          You/your group has used any CAD program to model <strong>AND</strong> 3D print an object or product of any
          dimension.
        </li>
        <li>This object could be for personal use, a prototype, an artistic expression or even a commercial product.
        </li>
        <li>
          The 3D file <strong>HAS</strong> to be modelled by the participant/s to the challenge. 3D files downloaded
          from the internet, or then downloaded and manipulated even partially <strong>DO NOT</strong> qualify.
        </li>
        <li>3D scans of objects qualify only <strong>IF</strong> you have scanned and generated the file.</li>
        <li>The object can be a 3D print of any material, for eg. PLA, ABS, PETG, metal, ceramic etc…</li>
      </ul>,
      "For sending us your entry use a A4 paper size (in either landscape or portrait orientation) and compose it using the following four steps in a maximum of 3 pages in pdf format:",
      <ol>
        <li>Provide a name/title for your entry.</li>
        <li>Type your contact details, your name, your email id and/or phone number.</li>
        <li>
          Write a free-flowing description of maximum 300 words for the object. For eg.
          <ul className="fst-italic">
            <li>What is the object?</li>
            <li>How could it be used, by who?</li>
            <li>Is it a commercial product or could it be transformed into one?</li>
            <li>Or what does it artistically express?</li>
            <li>How did you come about deciding to model and 3D print it?</li>
            <li>How did you model it? What printer did you use?</li>
            <li>What is the story behind its making?</li>
          </ul>
        </li>
        <li>
          Below the descriptive text compose a <strong>minimum of 3 and a maximum of 5 photos of the object within 3 A4
          pages</strong>.
        </li>
      </ol>,
      <p>
        Send us your entry with the pdf (max 10mb) as an attachment to <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> with subject title as <strong>MVMF
        Challenge-3DPrinting-name/title of your entry</strong>.
      </p>,
    ],
    [
      <h4 className="text-center fw-bold mb-4">Challenge 01: On 3D Laser-Cutting</h4>,
      <ul>
        <li>You/your group has used any CAD program to draw/model <strong>AND</strong> laser-cut an object or product of
          any dimension.
        </li>
        <li>This object could be for personal use, a prototype, an artistic expression or even a commercial product.
        </li>
        <li>The CAD file <strong>HAS</strong> to be modelled by the participant/s to the challenge. CAD files downloaded
          from the internet, or then downloaded and manipulated even partially <strong>DO NOT</strong> qualify.
        </li>
        <li>Scanned drawings qualify only <strong>IF</strong> you have scanned and generated the file.</li>
        <li>The object can be a laser cut of any material, for eg. wood, acrylic, paper, leather etc…</li>
      </ul>,
      "For sending us your entry use a A4 paper size (in either landscape or portrait orientation) and compose it using the following four steps in a maximum of 3 pages in pdf format:",
      <ol>
        <li>Provide a name/title for your entry.</li>
        <li>Type your contact details, your name, your email id and/or phone number.</li>
        <li>
          Write a free-flowing description of maximum 300 words for the object. For eg.
          <ul className="fst-italic">
            <li>What is the object?</li>
            <li>How could it be used, by who?</li>
            <li>Is it a commercial product or could it be transformed into one?</li>
            <li>Or what does it artistically express?</li>
            <li>How did you come about deciding to model and 3D print it?</li>
            <li>How did you model it? What printer did you use?</li>
            <li>What is the story behind its making?</li>
          </ul>
        </li>
        <li>
          Below the descriptive text compose a <strong>minimum of 3 and a maximum of 5 photos of the object within 3 A4
          pages</strong>.
        </li>
      </ol>,
      <p>
        Send us your entry with the pdf (max 10mb) as an attachment to <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> with subject title as <strong>MVMF
        Challenge-Laser Cutting-name/title of your entry</strong>.
      </p>,
    ],
    [
      <h4 className="text-center fw-bold mb-4">Challenge 01: On Interactive Object(s)</h4>,
      <ul>
        <li>You/your group has, used electronic hardware <strong>AND</strong> software to build and make an interactive
          object/s or product (eg. Arduino, Raspberry Pi, ESP32 etc…)
        </li>
        <li>This object could be for personal use, a prototype, an artistic expression or even a commercial product.
        </li>
        <li>The entry <strong>HAS</strong> to have hardware and software component and <strong>CANNOT</strong> be only
          software. Reused code from example projects from the internet are okay for qualification, the main criteria
          will be the compelling narrative and gestalt presentation of the project.
        </li>
        <li>Projects that add a hardware and software for hacking existing appliances, instruments or tools are well
          qualified as entries.
        </li>
      </ul>,
      "For sending us your entry use a A4 paper size (in either landscape or portrait orientation) and compose it using the following four steps in a maximum of 3 pages in pdf format:",
      <ol>
        <li>Provide a name/title for your entry.</li>
        <li>Type your contact details, your name, your email id and/or phone number.</li>
        <li>
          Write a free-flowing description of maximum 300 words for the object. For eg.
          <ul className="fst-italic">
            <li>What is the object?</li>
            <li>How could it be used, by who?</li>
            <li>Is it a commercial product or could it be transformed into one?</li>
            <li>Or what does it artistically express?</li>
            <li>How did you come about deciding to model and 3D print it?</li>
            <li>How did you model it? What printer did you use?</li>
            <li>What is the story behind its making?</li>
          </ul>
        </li>
        <li>
          Below the descriptive text compose a <strong>minimum of 3 and a maximum of 5 photos of the object within 3 A4
          pages</strong>.
        </li>
        <li>
          As applicable and necessary a link to an uploaded video filmed portrait mode &#8597; in 9:16 format (eg. at
          Youtube, Vimeo etc…) of the project is encouraged but not mandatory – remember to
          use <strong>#mvmf2022</strong> and <strong>@btech_herning</strong>.
        </li>
      </ol>,
      <p>
        Send us your entry with the pdf (max 10mb) as an attachment to <a
        href="mailto:mvmf2022@btech.au.dk">mvmf2022@btech.au.dk</a> with subject title as <strong>MVMF
        Challenge-Interactive Object-name/title of your entry</strong>.
      </p>,
    ],
  ],
}

export const Challenge: FC = () => {
  const languageContext = useContext(LanguageContext)

  const [showChallenge, setShowChallenge] = useState<0 | 1 | 2 | 3>(0)

  if (showChallenge) return (
    <Container>
      <Row className="sticky-top">
        <Col xs={12} lg={7} xl={6} className="mx-auto text-end">
          <div className="d-inline-block text-center pointer interactive link p-2 py-1"
               style={{
                 fontSize: "90%",
                 background: colors.au7,
                 color: colors.au7comp,
               }}
               onClick={() => setShowChallenge(0)}>
            {close[languageContext.language]}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={7} xl={6} className="mx-auto">
          {textChallenges[languageContext.language][showChallenge - 1]
            ?.map((p, i) => typeof p === "string" ? <p key={i}>{p}</p> : p)}
        </Col>
      </Row>
    </Container>
  )
  else return (
    <Container>
      <Row>
        <Col xs={12} lg={7} xl={6} className="mx-auto">
          {text1[languageContext.language].map((p, i) => typeof p === "string" ? <p key={i}>{p}</p> : p)}
          <div className="w-100 d-flex justify-content-between">
            <div className="d-inline-block text-center fw-bold pointer align-items-center interactive link"
                 style={{
                   width: "calc(33.33334% - .5rem)",
                   fontSize: "75%",
                   background: colors.au7,
                   color: colors.au7comp,
                 }}
                 onClick={() => setShowChallenge(1)}>
              {titleChallenges[languageContext.language][0]} {challenge[languageContext.language]}
            </div>
            <div className="d-inline-block text-center fw-bold pointer align-items-center interactive link"
                 style={{
                   width: "calc(33.33334% - .5rem)",
                   fontSize: "75%",
                   background: colors.au7,
                   color: colors.au7comp,
                 }}
                 onClick={() => setShowChallenge(2)}>
              {titleChallenges[languageContext.language][1]} {challenge[languageContext.language]}
            </div>
            <div className="d-inline-block text-center fw-bold pointer align-items-center interactive link"
                 style={{
                   width: "calc(33.33334% - .5rem)",
                   fontSize: "75%",
                   background: colors.au7,
                   color: colors.au7comp,
                 }}
                 onClick={() => setShowChallenge(3)}>
              {titleChallenges[languageContext.language][2]} {challenge[languageContext.language]}
            </div>
          </div>
          {text2[languageContext.language].map((p, i) => typeof p === "string" ? <p key={i}>{p}</p> : p)}
        </Col>
      </Row>
    </Container>
  )
}