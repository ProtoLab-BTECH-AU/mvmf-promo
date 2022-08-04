import {FC} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Background} from "./components/Background"
import {LanguageContextProvider} from "./context/LanguageContext"
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import {Program} from "./pages/Program"

export const App: FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Background/>
    <LanguageContextProvider>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="program" element={<Program/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </LanguageContextProvider>
  </BrowserRouter>
)
