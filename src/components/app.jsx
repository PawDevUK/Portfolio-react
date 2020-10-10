import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import Header from './A-Header/Header'
import TopIntro from './B-Top-picture/top-intro'
import WhatIDO from './C-What-I-do/what-I-do'
import Projects from './D-Projects/projects'
import Cv from "./G-CV/cv.jsx"

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../style.css'

function Core(){
    return(
        <div className="container">
            <Header></Header>
            <TopIntro></TopIntro>
            <WhatIDO></WhatIDO>
            <Projects></Projects>
        </div>
    )
}


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/cv" component={Cv}></Route>
                <Route exact path="/" component={Core} ></Route>
            </Switch>
        </Router>


    )
}
export default App