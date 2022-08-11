import React from "react"
import ReactDOM from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {App} from "./App"
import {Background} from "./components/Background"
import "./index.css"

ReactDOM.render(<Background/>, document.getElementById("background"))
ReactDOM.render(<App/>, document.getElementById("root"))
