import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Intro from '../components/A-Intro/intro'
import Header from '../components/B-Header/Header'
import TopIntro from '../components/C-About/top-intro'

import Contact from '../components/G-Contact/Contact'
import Stack from '../components/D-Stack/stack.jsx'
import ReactSection from '../components/E-React/React'
import Projects from '../components/F-Projects/projects'
import Footer from '../components/H-Footer/Footer.jsx'

const WorkTracker = lazy( ()=>import('components/F-Projects/Work_Tracker/Work_Tracker') )
const TicTacToe = lazy( ()=>import('../components/F-Projects/TicTacToe/TicTacToe') )
const Login = lazy( ()=>import('../components/F-Projects/Register_Login/Login') )
const Register = lazy( ()=>import('../components/F-Projects/Register_Login/Register') )
const RegisterSignIn = lazy( ()=>import('../components/F-Projects/Register_Login/RegisterSignIn') )
const Covid = lazy( ()=>import('../components/F-Projects/covid-app/Covid') )

const CV = lazy( ()=>import('../components/I-CV/cv') )
const Chat = lazy( ()=>import('../components/Z-Chat/Chat') )

export default function Router(){
    
const GlobalStyle = createGlobalStyle`
    body{
        background-color:#fff;
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
        <BrowserRouter basename='/'>
        <Suspense fallback={<div></div>}>
        <Wrapper>
          <GlobalStyle/>
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
            <Route path='/workTracker'>
              <WorkTracker></WorkTracker>
            </Route>
            <Route exact path='/cv' >
              <CV></CV>
            </Route>
            <Route exact path='/register' >
              <Register></Register>
            </Route>
            <Route exact path='/RegisterSignIn' >
              <RegisterSignIn></RegisterSignIn>
            </Route>
            <Route exact path='/signIn' >
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Intro></Intro>
            </Route>
          </Switch>
        </Wrapper>
        </Suspense>
      </BrowserRouter>
    )
}