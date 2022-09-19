import {FC} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {ModalPage} from "./components/ModalPage"
import {HistoryContextProvider} from "./context/HistoryContext"
import {LanguageContextProvider} from "./context/LanguageContext"
import {About, title as aboutTitle} from "./pages/About"
import {
  Challenge,
  Challenge1,
  Challenge2,
  Challenge3,
  challengeTitlesFull,
  challengeTitlesHeader,
  title as challengeTitle,
} from "./pages/Challenge"
import {Home} from "./pages/Home"
import {HomeSimple} from "./pages/HomeSimple"
import {Map, title as mapTitle} from "./pages/Map"
import {NotFound, title as notFoundTitle} from "./pages/NotFound"
import {Program, title as programTitle} from "./pages/Program"
import {ForCompanies, title as forCompaniesTitle} from "./pages/ForCompanies"
import {ForStudents, title as forStudentsTitle} from "./pages/ForStudents"

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
          <Route path="challenge" element={<ModalPage title={challengeTitle} children={<Challenge/>}/>}/>
          <Route path="challenge1"
                 element={<ModalPage title={challengeTitlesFull[0]} headerTitle={challengeTitlesHeader[0]}
                                     children={<Challenge1/>}/>}/>
          <Route path="challenge2"
                 element={<ModalPage title={challengeTitlesFull[1]} headerTitle={challengeTitlesHeader[1]}
                                     children={<Challenge2/>}/>}/>
          <Route path="challenge3"
                 element={<ModalPage title={challengeTitlesFull[2]} headerTitle={challengeTitlesHeader[2]}
                                     children={<Challenge3/>}/>}/>
          <Route path="map" element={<ModalPage title={mapTitle} children={<Map/>}/>}/>
          <Route path="program" element={<ModalPage title={programTitle} children={<Program/>}/>}/>
          <Route path="*" element={<ModalPage title={notFoundTitle} children={<NotFound/>}/>}/>
        </Routes>
      </LanguageContextProvider>
    </HistoryContextProvider>
  </BrowserRouter>
)
