import React from "react"
// import { Container } from 'react-bootstrap'
import styled, { createGlobalStyle } from 'styled-components'

import HeaderReactBootstrap from "./A-Header/Header-reactBootstrap"

import Intro from "./Intro/intro"
import TopIntro from './B-Top-picture/top-intro'
import WhatIDO from './C-What-I-do/what-I-do'
import Projects from './D-Projects/projects'
import Stack from './E-Stack/stack.jsx'
import Footer from './F-Footer/footer.jsx'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../style.css'

const GlobalStyle = createGlobalStyle`
body{
margin:0px;
padding:0px;
}
`
const Wrapper = styled.div`
width:100%;
`
const Container = styled.div`
width:1000px;
margin: auto;
margin-top:30px;
padding:0px;

`
function App() {
    return (
        <Wrapper>
            <GlobalStyle />
            {/* <Intro></Intro> */}
            <HeaderReactBootstrap></HeaderReactBootstrap>
            <Container>
                <TopIntro></TopIntro>
                <WhatIDO></WhatIDO>
                <Projects></Projects>
                <Stack></Stack>
            </Container>
            <Footer></Footer>
        </Wrapper>




    )
}
export default App