import {FC} from "react"
import {Col, ColProps, Container, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import {LanguageSelector} from "./LanguageSelector"

interface IProps extends ColProps {
  title: string
  backURl?: string
  sticky?: boolean
}

export const Header: FC<IProps> = (props) => {
  return (
    <Navbar className={`p-2 ${props.sticky ? "sticky-top" : ""}`} style={{height: "4.75rem", ...props.style}}>
      <Container className="my-0 py-0">
        <Col className="mx-auto my-0 p-0 d-flex"
             xs={props.xs} md={props.md} lg={props.lg} xl={props.xl} xxl={props.xxl}>
          <Link to={props.backURl ?? "/"} style={{height: "fit-content"}}>
            <img src={`${process.env.PUBLIC_URL}/images/icons/arrow-left.svg`} alt="" style={{height: "2.375rem", marginTop: ".375rem"}}/>
          </Link>
          <div className="d-inline ms-2 text-small"><LanguageSelector/></div>

          <h1 className="text-big fw-bold d-inline ms-auto">
            {props.title}
          </h1>
        </Col>
      </Container>
    </Navbar>
  )
}