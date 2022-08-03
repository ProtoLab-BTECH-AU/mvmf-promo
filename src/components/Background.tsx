import {CSSProperties, FC} from "react"
import "./Background.css"

const backgroundStyle: CSSProperties = {
  animation: "blob 25s linear infinite alternate, rotate 100s linear infinite",
  width: "80vmax", height: "80vmax",
  top: "calc(50vh - 40vmax)", left: "calc(50vw - 40vmax)",
  borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
  background: "linear-gradient(90deg, var(--au-color-7) 0%, var(--au-color-8-comp) 100%)",
  opacity: .35,
}

export const Background: FC = () => {
  return <div className="position-fixed" style={{width: "100vw", height: "100vh"}}>
    <div className="position-absolute" style={backgroundStyle}></div>
  </div>
}