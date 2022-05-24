import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import TicTacToe from '../components/F-Projects/TicTacToe/TicTacToe'
import Projects from '../components/F-Projects/projects'
import Footer from '../components/H-Footer/Footer.jsx'
import TopIntro from '../components/C-About/top-intro'
import ReactSection from '../components/E-React/React'
import Contact from '../components/G-Contact/Contact'
import Stack from '../components/D-Stack/stack.jsx'
import Header from '../components/B-Header/Header'
import Covid from '../components/F-Projects/covid-app/Covid'
import Intro from '../components/A-Intro/intro'
import Chat from '../components/Z-Chat/Chat'
import CV from '../components/I-CV/cv'
import React from 'react'

export default function Router(){
    
const GlobalStyle = createGlobalStyle`
    body{
        background-color:#fff;
        font-family:'Nunito Sans', sans-serif;
        width:100%;
        margin:0px;
        padding:0px;
        font-size:100%;
        line-height:1; 
    }
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`
const Container = styled.div`
    width: 80%;
    @media (min-width: 992px) {
        width: 1000px;
    }
    margin: auto;
    padding: 0px;
`
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <GlobalStyle />
          <Switch>
            <Route exact path="/covid">
              <Covid></Covid>
            </Route>
            <Route exact path="/TicTacToe">
              <TicTacToe></TicTacToe>
            </Route>
            <Route exact path="/content">
              <Header></Header>
              <Chat></Chat>
              <Container>
                <TopIntro></TopIntro>
                <Stack></Stack>
              </Container>
              <ReactSection></ReactSection>
              <Container>
                <Projects></Projects>
              </Container>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route exact path="/cv">
              <CV></CV>
            </Route>
            <Route exact path="/">
              <Intro></Intro>
            </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    )
}