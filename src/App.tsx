import {FC} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Background} from "./components/Background"
import {LanguageContextProvider} from "./context/LanguageContext"
import {Home} from "./pages/Home"

export const App: FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Background/>
    <LanguageContextProvider>
      <Routes>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </LanguageContextProvider>
  </BrowserRouter>
)
