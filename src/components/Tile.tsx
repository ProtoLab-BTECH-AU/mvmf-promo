import {FC, MouseEventHandler} from "react"
import {Link} from "react-router-dom"
import {colors} from "../colors"


export const Tile: FC<{ title?: string, titleLight?: boolean, background?: string, link?: string, onClick?: MouseEventHandler<HTMLDivElement> }> = (props) => (
  <div className={`interactive h-100 ${props.link || props.onClick ? "link" : ""}`} onClick={props.onClick}>
    {props.background &&
      <div className="square-image h-100"
           style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${encodeURIComponent(props.background)})`}}/>}
    {props.title && (
      <div className="interactive-title text-xsmall fw-bold"
           style={{background: props.titleLight ? colors.au7 : colors.au7comp}}>
        <span style={{color: props.titleLight ? colors.au7comp : colors.au7}}>
          {props.title}
        </span>
      </div>
    )}
    {(props.link && !props.onClick) && (
      props.link.search(/^https?:\/\//) >= 0 ?
        <a target="_blank" rel="noreferrer" href={props.link} className="stretched-link"/> :
        <Link to={props.link} className="stretched-link"/>
    )}
  </div>
)