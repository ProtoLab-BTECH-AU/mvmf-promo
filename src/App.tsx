import {FC} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Background} from "./components/Background"
import {LanguageContextProvider} from "./context/LanguageContext"
import {About} from "./pages/About"
import {Competition} from "./pages/Competition"
import {Home} from "./pages/Home"
import {Map} from "./pages/Map"
import {NotFound} from "./pages/NotFound"
import {Program} from "./pages/Program"

export const App: FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Background/>
    <LanguageContextProvider>
      <div className="position-absolute w-100">
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="program" element={<Program/>}/>
          <Route path="map" element={<Map/>}/>
          <Route path="challenge" element={<Competition/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </LanguageContextProvider>
  </BrowserRouter>
)
