import React from "react"

import Particle from './A-Header/particles'
import Header from './A-Header/Header'
import TopIntro from './B-Top-picture/top-intro'
import WhatIDO from './C-What-I-do/what-I-do'
import Projects from './D-Projects/projects'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../style.css'



function App() {
    return (
        <div className="container">
            <Header></Header>
            <TopIntro></TopIntro>
            <WhatIDO></WhatIDO>
            <Projects></Projects>
        </div>


    )
}
export default App