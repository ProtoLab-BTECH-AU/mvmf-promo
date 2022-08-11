import {createContext, FC, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"

export const HistoryContext = createContext<{ to: string, from: string, goBack: () => void }>({
  to: "",
  from: "",
  goBack: () => void null,
})

export const HistoryContextProvider: FC = ({children}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [history, setHistory] = useState<{ to: string, from: string }>({to: location.pathname, from: location.pathname})

  useEffect(() => setHistory((prev) => ({to: location.pathname, from: prev.to})), [location])

  const goBack = () => history.from === history.to ? navigate("/") : navigate(-1)

  return <HistoryContext.Provider value={{...history, goBack}} children={children}/>
}