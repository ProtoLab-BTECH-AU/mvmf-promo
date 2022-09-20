import {FC} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {ModalPage} from "./components/ModalPage"
import {HistoryContextProvider} from "./context/HistoryContext"
import {LanguageContextProvider} from "./context/LanguageContext"
import {About, title as aboutTitle} from "./pages/About"
import {ForCompanies, title as forCompaniesTitle} from "./pages/ForCompanies"
import {ForStudents, title as forStudentsTitle} from "./pages/ForStudents"
import {Home} from "./pages/Home"
import {HomeSimple} from "./pages/HomeSimple"
import {Map, title as mapTitle} from "./pages/Map"
import {NotFound, title as notFoundTitle} from "./pages/NotFound"
import {Program, title as programTitle} from "./pages/Program"
import {title as workshopsTitle, Workshops} from "./pages/Workshops"

export const App: FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HistoryContextProvider>
      <LanguageContextProvider>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="blob" element={null}/>
          <Route path="blob-titles" element={<HomeSimple/>}/>
          <Route path="about" element={<ModalPage title={aboutTitle} children={<About/>}/>}/>
          <Route path="for-companies" element={<ModalPage title={forCompaniesTitle} children={<ForCompanies/>}/>}/>
          <Route path="for-students" element={<ModalPage title={forStudentsTitle} children={<ForStudents/>}/>}/>
          <Route path="workshops" element={<ModalPage title={workshopsTitle} children={<Workshops/>}/>}/>
          <Route path="map" element={<ModalPage title={mapTitle} children={<Map/>}/>}/>
          <Route path="program" element={<ModalPage title={programTitle} children={<Program/>}/>}/>
          <Route path="*" element={<ModalPage title={notFoundTitle} children={<NotFound/>}/>}/>
        </Routes>
      </LanguageContextProvider>
    </HistoryContextProvider>
  </BrowserRouter>
)
