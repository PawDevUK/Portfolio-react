import React from "react"
import { Container } from 'react-bootstrap'


import HeaderReactBootstrap from "./A-Header/Header-reactBootstrap"

import TopIntro from './B-Top-picture/top-intro'
import WhatIDO from './C-What-I-do/what-I-do'
import Projects from './D-Projects/projects'
import Stack from './E-Stack/stack.jsx'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../style.css'



function App() {
    return (
        <Container>
            <HeaderReactBootstrap></HeaderReactBootstrap>
            <TopIntro></TopIntro>
            <WhatIDO></WhatIDO>
            {/* <Projects></Projects> */}
            <Stack></Stack>
        </Container>



    )
}
export default App